package com.cg.controller;

import java.util.Map;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/razorpayment")
public class RazorPayController {
	
	@PostMapping("/create_order")
	public String createOrder(@RequestBody Map<String, Object> data) throws RazorpayException {
		System.out.println("INSIDE PAYMENT ORDER");
		Double amt = Double.parseDouble(data.get("amount").toString());

		var client = new RazorpayClient("rzp_test_XvFLBvwKXKETgn", "x3NBdtSs5crwHsoPUfncrjAU");

		JSONObject orderRequest = new JSONObject();

		orderRequest.put("amount", amt * 1); // amount in the smallest currency unit

		orderRequest.put("currency", "INR");

		orderRequest.put("receipt", "Carwash_76576");

		Order order = client.Orders.create(orderRequest);

		System.out.println(order);

		return order.toString();

	}

}

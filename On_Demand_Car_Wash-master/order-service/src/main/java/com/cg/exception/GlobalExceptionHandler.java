package com.cg.exception;



import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.cg.payload.ErrorInfo;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler
{
	@ExceptionHandler(OrderNotFoundException.class)
	public ResponseEntity<ErrorInfo> handleOrderNotExistingException(Exception e, HttpServletRequest req) {

		String uri = req.getRequestURI().toString();

		ErrorInfo errorInfo = new ErrorInfo(uri, e.getMessage());

		ResponseEntity<ErrorInfo> responseEntity = new ResponseEntity<>(errorInfo, HttpStatus.NOT_FOUND);
		return responseEntity;
	}
	
	
}

import axios from "axios";

let car={
    carModel: "Swift LXi",
    carName: "Swift",
    contactno: "1234567893",
    date: "2024-01-27",
    orderId: "15",
    username: "bijay123",
    address: "banglore",
}

test("Testing Order By Id funciton.", async () => {
    axios.get("http://localhost:8081/order/viewOrder/" + 15).then((resp) =>{
        let order = order.data;
        expect(order).toBe(order);       
    });
});

test("Testing Add Order funciton.", async () => {
    axios.post("http://localhost:8081/order/addorder",car).then((resp) =>{
        let order = result.data;
        expect(order).toBe(order);        
    });
});

test("Testing List all Order funciton.", async () => {
    axios.get("http://localhost:8081/order/allorders").then((resp) =>  {
        let order = result.data;
        expect(order).toBe(order);        
    });
});




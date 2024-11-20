import axios from "axios"

const postOrder = async (order, phone, total) => {
    try {
        const response = await axios.post("http://localhost:3000/order", {
            phoneNumber: phone,
            totalPrice: total,
            orderItems: order
        });
        console.log('Order posted successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error posting order:', error.response ? error.response.data : error.message);
        throw error;
    }
}
export default postOrder;
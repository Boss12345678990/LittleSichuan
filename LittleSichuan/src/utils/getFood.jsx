import axios from "axios";

const getFood = async () => {
    try{
        const response = await axios.get("http://localhost:3000/product");
        return response.data;
    } 
    catch(error) {
        console.log(error);
        return null;
    }
}

export default getFood;
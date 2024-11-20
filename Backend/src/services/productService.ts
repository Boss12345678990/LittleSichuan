import {productRepository} from "../utils/Repo";
import Product from "../entity/Product";

export default class productService{
    async getAllProduct(): Promise<Product[]>{
        const allProduct = await productRepository.find({relations:["productOrder"] ,where: { deletedAt: null }});
        return allProduct;
    }
    async getProductById(id: number): Promise<Product>{
        const product = await productRepository.findOne({relations:["productOrder"], where :{id: id}});
        return product;
    }
    async createProduct(body: Product): Promise<Product>{
        const {description, name, photo, price, type} = body;
        if(name.trim() === "" || photo.trim()=== "" || price < 0 || type.trim() === ""){
            throw new Error("information not given");
        }
        const newProduct = new Product();
        newProduct.description = description;
        newProduct.name = name;
        newProduct.photo = photo;
        newProduct.price = price;
        newProduct.type = type;
        await productRepository.save(newProduct);
        return newProduct;
    }
    async updateProductById(id:number,updatefield: Partial<Product>): Promise<void>{
        await productRepository.update(id, updatefield);
    }
    async deleteProductById(id:number){
        const delteProduct = await productRepository.findOneBy({id: id});
        if(delteProduct){
            const time = new Date();
            delteProduct.deletedAt = time;
            await productRepository.save(delteProduct);
        }
        else{
            throw new Error("Product Not Found");
        }
    }
}
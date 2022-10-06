import { Injectable } from "@nestjs/common";
import { Product } from "./prodcuts.model";


@Injectable()
export class ProductService{
    products:Product[] = [];
    insertProduct(title:string,description:string,price:number){
        const prodId= new Date().toString();
        const newProduct= new Product (prodId,title,description,price)
        this.products.push(newProduct);
    }
}
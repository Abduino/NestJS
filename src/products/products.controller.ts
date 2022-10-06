import { Body, Controller, Post } from "@nestjs/common";
import { ProductService } from "./products.service";

@Controller ('products')

export class ProductsController{
    constructor(private readonly productsService:ProductService){}
    @Post()
    addProduct(@Body('title') prodTitle:string, 
    @Body('description') prodDesc:string,
    @Body('price') prodPrice:number,
    ){
        const generatedId = this.productsService.insertProduct(prodTitle,prodDesc,prodPrice);
    return {id: generatedId}
    
}
}
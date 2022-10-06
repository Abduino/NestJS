
import { Module } from "@nestjs/common";

import { ProductService } from "./products.service";
import { ProductsController } from "./products.controller";

@Module({
    imports: [],
    controllers: [ProductsController],
    providers:[ProductService],
})

export class ProductsModule {}
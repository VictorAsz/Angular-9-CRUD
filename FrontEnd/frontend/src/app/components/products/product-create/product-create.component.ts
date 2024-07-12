import { Router } from "@angular/router";
import { ProductService } from "../product.service";
import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model";

@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrl: "./product-create.component.css",
})
export class ProductCreateComponent implements OnInit {
  
  product: Product = {
    name: 'ProdutoDeTestes',
    price: 123.43
  }
  
  constructor(
    private ProductService: ProductService,
    private router: Router
  ){}

  ngOnInit(): void {}

  createProduct(): void {
    this.ProductService.create(this.product)
  .subscribe(() => {
    this.ProductService.showMessage("Produto Criado")
    this.router.navigate(["/products"])
    })
 ;
  }
  cancel(): void {
;
  }
}

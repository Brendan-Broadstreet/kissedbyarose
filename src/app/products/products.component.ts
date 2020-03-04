import { Component, OnInit } from '@angular/core';
import { PLANTS } from '../mock-plants';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css', '../../../node_modules/bulma/css/bulma.css']
})
export class ProductsComponent implements OnInit {
  product: any;
  // tslint:disable-next-line:max-line-length
  
  image = 'https://source.unsplash.com/312x234/?greenhouse,rose,bright' ;
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getPlants();
  }

  getPlants(): void {
    this.productService.getPlants()
      .subscribe(plants => this.product = plants);
  }


}

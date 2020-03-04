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
  image = 'https://images.unsplash.com/photo-1559456964-a49e2f0cf0d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80';
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getPlants();
  }

  getPlants(): void {
    this.productService.getPlants()
      .subscribe(plants => this.product = plants);
  }


}

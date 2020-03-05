import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css', '../../../node_modules/bulma/css/bulma.css']
})
export class ProductsComponent implements OnInit {
  product: any;
  // tslint:disable-next-line:max-line-length

  image = 'https://source.unsplash.com/312x234/?greenhouse,rose,bright';

  constructor(private productService: ProductService) { }

  Product: Plant[];
  sessionToken: string;

  ngOnInit(): void {
    this.getPlants();
    this.sessionToken = localStorage.getItem('token');
  }

  getPlants(): void {
    this.productService.getPlants()
      .subscribe(plants => this.product = plants);
  }

  delete(id: number): void {
    this.productService.deleteProduct(id).subscribe((response) => { this.ngOnInit(); });
  }

}

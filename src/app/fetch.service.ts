import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './fetch.service.ts',
  styleUrls: ['./products.component.css', '../../../node_modules/bulma/css/bulma.css']
})

export class FetchServiceComponent implements OnInit {

  constructor(private fetchService: ProductService) { }

  ngOnInit(): void {
  }

  getPlants() {
    this.fetchService.getPlants().subscribe((data) => {
      console.log(data);
    });
  }



}

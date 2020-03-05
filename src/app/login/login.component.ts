import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../node_modules/bulma/css/bulma.css']
})
export class LoginComponent implements OnInit {

  constructor(private productService: ProductService) { }

  sessionToken: string;
  loggedIn: boolean;

  ngOnInit(): void {
    this.sessionToken = localStorage.getItem('token');
    if (this.sessionToken) {
      this.loggedIn = true;
    }
  }

  login(email: string, password: string): void {
    if (!email || !password) {
      return;
    }
    this.productService.login(email, password)
      .subscribe((response) => { localStorage.setItem('token', response.token); console.log('logged in'); this.loggedIn = true; });
  }

  logout(): void {
    localStorage.clear();
    this.sessionToken = '';
    this.loggedIn = false;
  }

}

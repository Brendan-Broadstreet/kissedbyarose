import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user';
import { Plant } from './plant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  private loginUrl = 'http://localhost:3000/api/auth/login';
  private productUrl = 'http://localhost:3000/api/product';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private log(message: string) {
    console.log(message);
  }

  login(email: string, password: string): Observable<any> {
    let user = new User();
    user.email = email;
    user.password = password;
    return this.http.post(this.loginUrl, user, this.httpOptions).pipe(
      tap((response: any) => this.log('login success')),
      catchError(this.handleError<User>('login'))
    );
  }

  getPlants() {
    return this.http.get('http://localhost:3000/api/product/');
  }

  deleteProduct(id: number): Observable<any> {
    console.log('This will delete ' + this.productUrl + '/' + id);
    return this.http.delete(this.productUrl + '/' + id, this.httpOptions).pipe(
      tap((response: object) => this.log(`deleted product. response: ${response}`)),
      catchError(this.handleError<any>('deleteProduct'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

}

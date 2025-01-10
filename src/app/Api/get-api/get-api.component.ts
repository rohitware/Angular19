import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent {
  userList: any[] = [];

  productList: any[] = [];
  constructor(private http: HttpClient) {}

  getUsers() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((result: any) => {
        this.userList = result;
      });
  }

  getProduct() {
    this.http.get('https://fakestoreapi.com/products').subscribe((res:any) => {
      this.productList = res;
    });
  }
}

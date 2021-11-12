import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class simpleCrudService {
  private apiServer = "http://localhost:42044/api";
  //private apiServer =" http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiServer + '/product/', JSON.stringify(product), this.httpOptions)
    
  }  
  getById(id): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/product/' + id)
   
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer + '/product/')
    
  }

  update(id, product): Observable<Product> {
    return this.httpClient.put<Product>(this.apiServer + '/product/' + id, JSON.stringify(product), this.httpOptions)
    
  }

  delete(id):Observable<any>{
    return this.httpClient.delete<Product>(this.apiServer + '/product/' + id, this.httpOptions)
    
  }
 
}

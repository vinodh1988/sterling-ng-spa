import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

 httpOptions;
  constructor(private http:HttpClient) {
   
   }

  getReviews():Observable<Object>
  {
    
    return this.http.get("http://localhost:8894/rest-api/reviews");
  }

  postReviews(data):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    return this.http.post("http://localhost:8894/rest-api/reviews",data,this.httpOptions);
  
  }
}

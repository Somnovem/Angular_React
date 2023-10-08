import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RandomnessService {

  private API_URL:string = 'https://api.random.org/json-rpc/2/invoke';

  constructor(private http:HttpClient) { }

  getIntInRange(payload:any){
    return this.http.post(this.API_URL,payload);
  }
}

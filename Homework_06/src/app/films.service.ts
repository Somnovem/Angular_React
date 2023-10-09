import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private API_URL:string = 'https://www.omdbapi.com/?apiKey=3462e082';
  constructor(private http:HttpClient) { }

  getFilmData(title:string,year:number,plotFull:boolean){
    let url = this.API_URL + `&t=${title}`;
    if (year != 0) url += `&y=${year}`;
    if (plotFull) url += '&plot=full';
    return this.http.get(url);
  }
}

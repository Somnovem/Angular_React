import { Component } from '@angular/core';
import {FilmsService} from "../films.service";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {

  constructor(private filmsService:FilmsService) {
  }

  title:string = '';
  year:number = 0;
  plotFull:boolean = false;
  filmInfo:any;

  getFilmInfo() {
    this.filmsService.getFilmData(this.title,this.year,this.plotFull).subscribe((data) =>{
      console.dir(data);
      this.filmInfo = data;
    });
  }

}

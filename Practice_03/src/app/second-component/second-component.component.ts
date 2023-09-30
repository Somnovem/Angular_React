import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})

export class SecondComponentComponent {
  textColor:string = "red"
  fontSize:number = 18;
  isSpecial:boolean = true;

  students: {name:string,lastname:string,grade:number}[] = [
    {
      name:'John',
      lastname:'Doe',
      grade:95
    },
    {
      name:'Mark',
      lastname:'Williams',
      grade:90
    },
    {
      name:'Mary',
      lastname:'Killian',
      grade:98
    }
    ];


}

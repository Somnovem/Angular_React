import { Component } from '@angular/core';
import {WondersListService} from "../wonders-list.service";
@Component({
  selector: 'app-wonders',
  templateUrl: './wonders.component.html',
  styleUrls: ['./wonders.component.css']
})
export class WondersComponent {
  constructor(public wondersListService:WondersListService) {
    this.currentWonder = this.wondersListService.getWonder(this.currentWonderIndex);
    this.wondersLength = this.wondersListService.getLength();
  }

  currentWonder: {imageUrl:string,name:string,description:string} = {imageUrl:'',name:'',description:''};
  wondersLength:number = 0;
  currentWonderIndex:number = 0;

  nextWonder() {
    this.currentWonder = this.wondersListService.getWonder(++this.currentWonderIndex);
  }

  prevWonder() {
    this.currentWonder = this.wondersListService.getWonder(--this.currentWonderIndex);
  }
}

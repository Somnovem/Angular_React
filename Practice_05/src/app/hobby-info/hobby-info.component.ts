import { Component } from '@angular/core';
import {HobbyInfoService} from "../hobby-info.service";

@Component({
  selector: 'app-hobby-info',
  templateUrl: './hobby-info.component.html',
  styleUrls: ['./hobby-info.component.css']
})
export class HobbyInfoComponent {
  constructor(public infoService:HobbyInfoService) {
    this.firstPassage = this.infoService.getFirstPassage();
    this.secondPassage = this.infoService.getSecondPassage();
    this.publishedOn = this.infoService.getPublicationDate();
  }
  firstPassage:string = '';
  secondPassage:string = '';
  publishedOn:Date = new Date();
}

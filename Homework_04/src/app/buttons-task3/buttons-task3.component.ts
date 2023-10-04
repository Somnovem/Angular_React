import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-buttons-task3',
  templateUrl: './buttons-task3.component.html',
  styleUrls: ['./buttons-task3.component.css']
})
export class ButtonsTask3Component {
  @Output() onClicked = new EventEmitter<true>();

  valueChanged(chosen:any){
    this.onClicked.emit(chosen);
  }
}

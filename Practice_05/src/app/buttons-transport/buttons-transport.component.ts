import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-buttons-transport',
  templateUrl: './buttons-transport.component.html',
  styleUrls: ['./buttons-transport.component.css']
})
export class ButtonsTransportComponent {
  @Output() onClicked = new EventEmitter<true>();

  valueChanged(chosen:any){
    this.onClicked.emit(chosen);
  }
}

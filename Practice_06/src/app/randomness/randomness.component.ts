import { Component } from '@angular/core';
import {RandomnessService} from "../randomness.service";

@Component({
  selector: 'app-randomness',
  templateUrl: './randomness.component.html',
  styleUrls: ['./randomness.component.css']
})
export class RandomnessComponent {
  min:number = 1;
  max:number = 100;
  quantity:number = 1;
  guessResult:string = '';
  diceResult:string = '';
  listHolder:any;
  private API_KEY:string = '769c0694-ccc6-4df3-845a-eb4758c01185';

  constructor(public randomnessService:RandomnessService) {this.getRandomList();}
  getRandomList() {
    let payload = {
      jsonrpc:'2.0',
      method: 'generateIntegers',
      params: {
        apiKey: this.API_KEY,
        n: this.quantity,
        min: this.min,
        max: this.max,
        replacement: true,
      },
      id: 1
    };
    this.randomnessService.getIntInRange(payload).subscribe((data) => {
      this.listHolder = data;
    });
  }

  flipCoin(guess:number) {
    let payload = {
      jsonrpc:'2.0',
      method: 'generateIntegers',
      params: {
        apiKey: this.API_KEY,
        n: 1,
        min: 0,
        max: 1,
        replacement: true,
      },
      id: 1
    };
    this.randomnessService.getIntInRange(payload).subscribe((data:any) => {
      this.guessResult = data.result.random.data == guess ? "right" : "wrong";
    });
  }

  diceResultsPlayer: number[] = [0, 0, 0];
  diceResultsBot: number[] = [0, 0, 0];
  rolling:boolean = false;
  newRound() {
    this.rolling = true;
    let payload = {
      jsonrpc:'2.0',
      method: 'generateIntegers',
      params: {
        apiKey: this.API_KEY,
        n: this.diceResultsPlayer.length + this.diceResultsBot.length,
        min: 1,
        max: 6,
        replacement: true,
      },
      id: 1
    };
    this.randomnessService.getIntInRange(payload).subscribe((data:any) => {
      const result = data.result.random.data;

      let playersSum :number = 0;
      for (let i:number = 0; i <this.diceResultsPlayer.length;i++){
        this.diceResultsPlayer[i] = result[i];
        playersSum += result[i];
      }

      let setIndex:number = 0;
      let botsSum :number = 0;
      for (let j:number = this.diceResultsPlayer.length; j < this.diceResultsPlayer.length + this.diceResultsBot.length;j++){
        this.diceResultsBot[setIndex++] = result[j];
        botsSum += result[j];
      }

      if (playersSum > botsSum) this.diceResult = 'You won!';
      else if (playersSum < botsSum) this.diceResult = 'You lost!';
      else this.diceResult = 'Tie!';

      this.rolling = false;
    });
  }
}

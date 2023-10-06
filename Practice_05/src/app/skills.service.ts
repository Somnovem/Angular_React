import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  constructor() { }

  private skills:string = 'B2+ English, Can work under pressure, Familiar with Agile, Basic knowledge of Git.  Experienced with C++, C#, Java, JS, Python, TSQL, SQLite'

  getValue() {
    return this.skills;
  }
}

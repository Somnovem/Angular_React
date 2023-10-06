import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  getExperience(): string
  {
    return '     <h2>Experience(service)</h2>' +
        '        <p>' +
        '          No commercial experience <br>\n' +
        '          Made a <a style="color:black;" href="https://github.com/Somnovem/Exams/tree/main/Exam2">Testing System</a> in C++ <br>' +
        '          Made a <a style="color:black;" href="https://github.com/Somnovem/Exams/tree/main/DownoloadManager">Download Manager</a> in C# WPF <br>' +
        '          Made a <a style="color:black;" href="https://github.com/Somnovem/UnityDashPong">Local Network Game "DashPong"</a> in Unity <br>' +
        '        </p>'
  }
}

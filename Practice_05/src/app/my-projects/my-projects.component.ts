import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent {
  @Input() projects: {githubLink:string, projectName:string, languages: string}[] = [];
}

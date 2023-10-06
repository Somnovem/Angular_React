import { Component } from '@angular/core';
import {SkillsService} from "../skills.service";
import {ExperienceService} from "../experience.service";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  constructor(public skillsService:SkillsService, public experienceService:ExperienceService,private sanitizer: DomSanitizer) {
    let untrustedHtml = this.experienceService.getExperience();
    this.experienceServiceText = this.sanitizer.bypassSecurityTrustHtml(untrustedHtml);
  }

  birthday:Date = new Date(2006,7,3);
  imgSrc: string = "./assets/imgs/selfie.png";
  gitIcoSrc: string = "./assets/imgs/git.png";
  instaIcoSrc: string = "./assets/imgs/insta.png";
  efficiency:number = 1.1;
  salaryLowest:number = 350;
  salaryHighest:number = 700;
  showButtonsMenu:boolean = false;
  experienceServiceText:SafeHtml = ''

  isEmailHovered:boolean = false;
  employmentStatus:string = 'currently unemployed';
  isNameHovered: boolean = false;
  projects: {githubLink:string, projectName:string, languages: string}[] = [

    {
      githubLink: 'https://github.com/Somnovem/Exams/tree/main/Exam2',
      projectName: "Testing System",
      languages: "C++"
    },
    {
      githubLink: 'https://github.com/Somnovem/Exams/tree/main/DownoloadManager',
      projectName: "Download Manager",
      languages: "C# WPF"
    },
    {
      githubLink: 'https://github.com/Somnovem/UnityDashPong',
      projectName: "Local Network Game \"DashPong\"",
      languages: "Unity"
    }

  ]
  gitIco_MouseOver(){
    this.gitIcoSrc = "./assets/imgs/git_alt.png";
  }

  gitIco_MouseLeave(){
    this.gitIcoSrc = "./assets/imgs/git.png";
  }

  instaIco_MouseOver(){
    this.instaIcoSrc = "./assets/imgs/insta_alt.png";
  }

  instaIco_MouseLeave(){
    this.instaIcoSrc = "./assets/imgs/insta.png";
  }

  emailHoveredChanged() {
    this.isEmailHovered = !this.isEmailHovered;
  }

  nameHoveredChanged() {
    this.isNameHovered = !this.isNameHovered;
  }
}

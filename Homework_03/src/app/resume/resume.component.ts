import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  imgSrc: string = "./assets/imgs/selfie.png";
  gitIcoSrc: string = "./assets/imgs/git.png";
  instaIcoSrc: string = "./assets/imgs/insta.png";

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
}

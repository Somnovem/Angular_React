import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HobbyInfoService {
  constructor() { }

  getFirstPassage() {
    return 'Photography is a wonderful hobby that allows you to capture and share the beauty of the world around you. Whether you\'re a beginner or an experienced photographer, this website is a place for you to showcase your passion for photography.';
  }

  getSecondPassage() {
    return 'Join our community and share your photos, tips, and experiences with fellow photographers. Explore stunning images, learn new techniques, and get inspired to capture the world in your unique way.';
  }

  getPublicationDate() {
    return new Date(2023,7,8);
  }
}

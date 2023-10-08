import {Component, OnInit} from '@angular/core';
import {GalleryService} from "../gallery.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  constructor(private galleryService:GalleryService) {
  }

  ngOnInit() {
    this.currentPainting = this.galleryService.getPaintingByIndex(0);
    this.otherPaintingByCurrentAuthor = this.galleryService.getOtherPaintingsByAuthor(this.currentPainting.author,this.currentPainting.title).slice(0,5);
    this.allPaintings = this.galleryService.getPaintings();
  }

  currentPainting:any;
  otherPaintingByCurrentAuthor:any[] = [];
  allPaintings:any[] = [];

  choosePainting(title:string,author:string) {
    this.currentPainting = this.galleryService.getPainting(title,author);
    this.otherPaintingByCurrentAuthor = this.galleryService.getOtherPaintingsByAuthor(this.currentPainting.author,this.currentPainting.title);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor() { }
  private paintings: {
    imageUrl:string,
    title:string,
    year:number,
    author:string,
    dimensions:string,
    location:string
  }[] = [
    {
      title: 'The Starry Night',
      author:'Vincent Van Gogh',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F42%2Ffc%2F07%2F42fc0770ab99e52b41dcac3555f47b8e.jpg&f=1&nofb=1&ipt=fd3d4a81652d16fe67e500fad905a1546f6da6e1c016618c78ff5a8ad7a981eb&ipo=images',
      dimensions: '73.7cm x 92.1 cm',
      location: 'Museum of Modern Art, New York',
      year:1889
    },
    {
      title: 'The Olive Trees',
      author:'Vincent Van Gogh',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Van_Gogh_The_Olive_Trees..jpg/405px-Van_Gogh_The_Olive_Trees..jpg',
      dimensions: '92 cm × 72.5 cm',
      location: 'Museum of Modern Art, New York',
      year:1889
    },
    {
      title: 'Starry Night Over the Rhône',
      author:'Vincent Van Gogh',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/405px-Starry_Night_Over_the_Rhone.jpg',
      dimensions: '72.5 cm × 92 cm',
      location: 'Museum of Modern Art, New York',
      year:1888
    },
    {
      title: 'Café Terrace at Night',
      author:'Vincent Van Gogh',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG/405px-Vincent_van_Gogh_%281853-1890%29_Caf%C3%A9terras_bij_nacht_%28place_du_Forum%29_Kr%C3%B6ller-M%C3%BCller_Museum_Otterlo_23-8-2016_13-35-40.JPG',
      dimensions: '80.7 cm × 65.3 cm',
      location: 'Museum of Modern Art, New York',
      year:1888
    },
    {
      title: 'Vilabertran',
      author:'Salvador Dalí',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Vilabertrin.jpg/450px-Vilabertrin.jpg',
      dimensions: '20 cm × 15 cm',
      location: 'Museum of Modern Art, New York',
      year:1913
    },
    {
      title: 'The Persistence of Memory',
      author:'Salvador Dalí',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg',
      dimensions: '24 cm × 33 cm',
      location: 'Museum of Modern Art, New York',
      year:1931
    },
    {
      title: 'Metamorphosis of Narcissus',
      author:'Salvador Dalí',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/2/21/Metamorphosis_of_Narcissus.jpg',
      dimensions: '51.2 cm × 78.1 cm',
      location: 'Tate Modern, London',
      year:1937
    }
  ];

  getPainting(title:string,author:string) {
    return this.paintings.filter((painting) => painting.title == title && painting.author == author )[0];
  }

  getPaintings() {
    return this.paintings;
  }

  getPaintingByIndex(index:number){
    return this.paintings[index];
  }

  getPaintingsByAuthor(author:string){
    return this.paintings.filter((painting) => painting.author == author);
  }

  getOtherPaintingsByAuthor(author:string, currentPaintingTitle:string){
    return this.paintings.filter((painting) => painting.author == author && painting.title != currentPaintingTitle);
  }

}

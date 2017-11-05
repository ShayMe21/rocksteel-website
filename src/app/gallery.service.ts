import { Injectable } from '@angular/core';

@Injectable()
export class GalleryService {
  visibleImages = [];
  constructor() { }

  getImages() {
    return this.visibleImages = IMAGES.slice(0);
  }

  getImageById(id: number) {
    return IMAGES.slice(0).find(image => image.id == id);
  }
}

const IMAGES = [
  { "id": 1, "title": "First", "url": "../assets/images/1.JPG", "category": "residential" },
  { "id": 2, "title": "Second", "url": "../assets/images/2.JPG", "category": "residential" },
  { "id": 3, "title": "Third", "url": "../assets/images/3.jpg", "category": "commercial" },
  { "id": 4, "title": "Fourth", "url": "../assets/images/4.jpg", "category": "commercial" },
  { "id": 5, "title": "Fifth", "url": "../assets/images/5.jpg", "category": "others" },
  { "id": 5, "title": "Sixth", "url": "../assets/images/6.jpg", "category": "others" }  
]
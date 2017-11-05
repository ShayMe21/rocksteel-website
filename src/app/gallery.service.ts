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
  { "id": 1, "title": "First", "url": "../assets/images/1-Thumb.jpg", "category": "residential" },
  { "id": 2, "title": "Second", "url": "../assets/images/2-Thumb.jpg", "category": "residential" },
  { "id": 3, "title": "Third", "url": "../assets/images/3-Thumb.jpg", "category": "commercial" },
  { "id": 4, "title": "Fourth", "url": "../assets/images/4-Thumb.jpg", "category": "commercial" },
  { "id": 5, "title": "Fifth", "url": "../assets/images/5-Thumb.jpg", "category": "residential" },
  { "id": 6, "title": "Sixth", "url": "../assets/images/6-Thumb.jpg", "category": "residential" },
  { "id": 7, "title": "Seventh", "url": "../assets/images/7-Thumb.jpg", "category": "commercial" },
  { "id": 8, "title": "Eight", "url": "../assets/images/8-Thumb.jpg", "category": "commercial" },
  { "id": 9, "title": "Ninth", "url": "../assets/images/9-Thumb.jpg", "category": "others" },
  { "id": 10, "title": "Tenth", "url": "../assets/images/10-Thumb.jpg", "category": "others" },
  { "id": 11, "title": "Eleventh", "url": "../assets/images/11-Thumb.jpg", "category": "others" }
  //0415526726
]
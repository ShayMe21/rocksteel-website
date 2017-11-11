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
  { "id": 1, "title": "First", "url": "../assets/images/RockSteelGroup_1_Small.jpg", "category": "residential" },
  { "id": 2, "title": "Second", "url": "../assets/images/RockSteelGroup_2_Small.jpg", "category": "residential" },
  { "id": 3, "title": "Third", "url": "../assets/images/RockSteelGroup_3_Small.jpg", "category": "commercial" },
  { "id": 4, "title": "Fourth", "url": "../assets/images/RockSteelGroup_4_Small.jpg", "category": "commercial" },
  { "id": 5, "title": "Fifth", "url": "../assets/images/RockSteelGroup_5_Small.jpg", "category": "residential" },
  { "id": 6, "title": "Sixth", "url": "../assets/images/RockSteelGroup_6_Small.jpg", "category": "residential" },
  { "id": 7, "title": "Seventh", "url": "../assets/images/RockSteelGroup_7_Small.jpg", "category": "commercial" },
  { "id": 8, "title": "Eight", "url": "../assets/images/RockSteelGroup_8_Small.jpg", "category": "commercial" },
  { "id": 9, "title": "Ninth", "url": "../assets/images/RockSteelGroup_9_Small.jpg", "category": "others" },
  { "id": 10, "title": "Tenth", "url": "../assets/images/RockSteelGroup_10_Small.jpg", "category": "others" },
  { "id": 11, "title": "Eleventh", "url": "../assets/images/RockSteelGroup_11_Small.jpg", "category": "others" }
]
import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { GalleryService } from './../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {
  visibleImages: any[] = [];
  @Input() filterBy?: string = "all";

  constructor(private galleryService: GalleryService) {
    this.visibleImages = galleryService.getImages();
  }

  ngOnInit() { }

  ngOnChanges() {
    this.visibleImages = this.galleryService.getImages();
  }


}

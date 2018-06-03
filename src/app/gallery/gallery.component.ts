import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';
import 'hammerjs';
import 'mousetrap';
import { Image, Action, ImageModalEvent, Description } from 'angular-modal-gallery';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges, OnInit, OnDestroy {
  visibleImages: any[] = [];
  @Input() filterBy? = 'all';

  constructor() {  }
  openModalWindow = false;
  imagePointer = 0;
  openModalWindowObservable = false;
  imagePointerObservable = 0;
  /**
   * @param [imageUrl, ThumbUrl, Alt, Url]
   */
  imagesArray: Array<Image> = [
    new Image(
      '../../assets/images/RockSteelGroup_1.jpg',
      '../../assets/images/RockSteelGroup_1_Small.jpg',
      'Rock Steel Group',
      null,
      'residential'
    ),
    new Image(
      '../../assets/images/RockSteelGroup_2.jpg',
      '../../assets/images/RockSteelGroup_2_Small.jpg',
      'Rock Steel Group',
      null,
      'residential'
    ),
    new Image(
      '../../assets/images/RockSteelGroup_3.jpg',
      '../../assets/images/RockSteelGroup_3_Small.jpg',
      'Rock Steel Group',
      null,
      'residential'
    ),
    new Image(
      '../../assets/images/RockSteelGroup_4.jpg',
      '../../assets/images/RockSteelGroup_4_Small.jpg',
      'Rock Steel Group',
      null,
      'residential'
    ),
    new Image(
      '../../assets/images/RockSteelGroup_5.jpg',
      '../../assets/images/RockSteelGroup_5_Small.jpg',
      'Rock Steel Group',
      null,
      'commercial'
    ),
    new Image(
      '../../assets/images/RockSteelGroup_6.jpg',
      '../../assets/images/RockSteelGroup_6_Small.jpg',
      'Rock Steel Group',
      null,
      'commercial'
    ),
    new Image(
      '../../assets/images/RockSteelGroup_7.jpg',
      '../../assets/images/RockSteelGroup_7_Small.jpg',
      'Rock Steel Group',
      null,
      'commercial'
    ),
    new Image(
      '../../assets/images/RockSteelGroup_8.jpg',
      '../../assets/images/RockSteelGroup_8_Small.jpg',
      'Rock Steel Group',
      null,
      'commercial'
    ),
    new Image(
      '../../assets/images/RockSteelGroup_9.jpg',
      '../../assets/images/RockSteelGroup_9_Small.jpg',
      'Rock Steel Group',
      null,
      'commercial'
    ),
    new Image(
      '../../assets/images/RockSteelGroup_10.jpg',
      '../../assets/images/RockSteelGroup_10_Small.jpg',
      'Rock Steel Group',
      null,
      'commercial'
    ),
    new Image(
      '../../assets/images/RockSteelGroup_11.jpg',
      '../../assets/images/RockSteelGroup_11_Small.jpg',
      'Rock Steel Group',
      null,
      'commercial'
    )
  ];

  // observable of an array of images with a delay to simulate a network request
  images: Observable<Array<Image>> = Observable.of(this.imagesArray).delay(300);

  // array of images initialized inside the onNgInit() of this component
  // in an asynchronous way subscribing to an Observable with a delay.
  // This is not a real use-case, but it's a way to simulate a scenario where
  // you have to subscribe to an Observable to get data and to set public vars
  imagesArraySubscribed: Array<Image>;

  customDescription: Description = {
    imageText: 'Image ',
    numberSeparator: ' of ',
    beforeTextDescription: ' => '
  };

  customFullDescription: Description = {
    // you should build this value programmaticaly with the result of (show)="..()" event
    customFullDescription: 'Custom description of the current visible image',
    // if customFullDescription !== undefined, all other fields will be ignored
    // imageText: '',
    // numberSeparator: '',
    // beforeTextDescription: '',
  };

  private subscription: Subscription;
  private imagesArraySubscription: Subscription;

  ngOnChanges() {
    this.visibleImages = this.getImages();
  }

  getImages() {
    return this.visibleImages = this.imagesArray.slice(0);
  }

  // Curtesy of https://ks89.github.io/angular-modal-gallery.github.io/demo


  ngOnInit() {
    this.imagesArraySubscription = Observable.of(null).delay(500).subscribe(() => {
      this.imagesArraySubscribed = this.imagesArray;
    });
  }

  openImageModal(image: Image) {
    this.imagePointer = this.imagesArray.indexOf(image);
    this.openModalWindow = true;
  }

  openImageModalObservable(image: Image) {
    this.subscription = this.images.subscribe((val: Image[]) => {
      this.imagePointerObservable = val.indexOf(image);
      this.openModalWindowObservable = true;
    });
  }

  onImageLoaded(event: ImageModalEvent) {
    // angular-modal-gallery will emit this event if it will load successfully input images
    console.log('onImageLoaded action: ' + Action[event.action]);
    console.log('onImageLoaded result:' + event.result);
  }

  onVisibleIndex(event: ImageModalEvent) {
    this.customFullDescription.customFullDescription = `Custom description of visible image with index= ${event.result}`;
    console.log('action: ' + Action[event.action]);
    console.log('result:' + event.result);
  }

  onIsFirstImage(event: ImageModalEvent) {
    console.log('onfirst action: ' + Action[event.action]);
    console.log('onfirst result:' + event.result);
  }

  onIsLastImage(event: ImageModalEvent) {
    console.log('onlast action: ' + Action[event.action]);
    console.log('onlast result:' + event.result);
  }

  onCloseImageModal(event: ImageModalEvent) {
    console.log('onClose action: ' + Action[event.action]);
    console.log('onClose result:' + event.result);
    this.openModalWindow = false;
    this.openModalWindowObservable = false;
  }

  addRandomImage() {
    this.imagesArray.push(this.imagesArray[Math.floor(Math.random() * this.imagesArray.length)]);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.imagesArraySubscription) {
      this.imagesArraySubscription.unsubscribe();
    }
  }


}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { from } from 'rxjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slide-image',
  templateUrl: './slide-image.component.html',
  styleUrls: ['./slide-image.component.css'],
})
export class SlideImageComponent implements OnInit {
  titleName: string = 'Slide Image with ng Slider';
  // khai bao view child
  @ViewChild('slide') slide: NgImageSliderComponent;
  constructor() {}

  ngOnInit(): void {}

  listImages: any = [
    {
      image: '../../../assets/images/1e4e4962c45b4c0192ccdbbe737916e0.jpg',
      thumbImage: '../../../assets/images/1e4e4962c45b4c0192ccdbbe737916e0.jpg',
      title: 'First Image',
    },
    {
      image: '../../../assets/images/backiee-107467.jpg',
      thumbImage: '../../../assets/images/backiee-107467.jpg',
    },
    {
      image: '../../../assets/images/backiee-114087.jpg',
      thumbImage: '../../../assets/images/backiee-114087.jpg',
    },
    {
      image: '../../../assets/images/backiee-119597.jpg',
      thumbImage: '../../../assets/images/backiee-119597.jpg',
    },
    {
      image: '../../../assets/images/backiee-129726.jpg',
      thumbImage: '../../../assets/images/backiee-129726.jpg',
    },
    {
      image: '../../../assets/images/backiee-141.jpg',
      thumbImage: '../../../assets/images/backiee-141.jpg',
    },
    {
      image: '../../../assets/images/backiee-167335.jpg',
      thumbImage: '../../../assets/images/backiee-167335.jpg',
    },
    {
      image: '../../../assets/images/backiee-27000.jpg',
      thumbImage: '../../../assets/images/backiee-27000.jpg',
    },
    {
      image: '../../../assets/images/backiee-36274.jpg',
      thumbImage: '../../../assets/images/backiee-36274.jpg',
    },
    {
      image: '../../../assets/images/backiee-50270.jpg',
      thumbImage: '../../../assets/images/backiee-50270.jpg',
    },
    {
      image: '../../../assets/images/backiee-86170.jpg',
      thumbImage: '../../../assets/images/backiee-86170.jpg',
    },
    {
      image: '../../../assets/images/sky_lantern_anime-63687.png',
      thumbImage: '../../../assets/images/sky_lantern_anime-63687.png',
    },
    {
      image: '../../../assets/images/screenshot.png',
      thumbImage: '../../../assets/images/screenshot.png',
    },
  ];
  prevImage() {
    this.slide.prev();
  }
  nextImage() {
    this.slide.next();
  }
}

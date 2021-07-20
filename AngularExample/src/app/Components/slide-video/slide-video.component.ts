import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-video',
  templateUrl: './slide-video.component.html',
  styleUrls: ['./slide-video.component.css'],
})
export class SlideVideoComponent implements OnInit {
  nameTitle = 'Slide video with ng-slider';
  constructor() {}

  ngOnInit(): void {}

  listVideos = [
    {
      video: 'https://www.youtube.com/watch?v=lEMRJhtamGc',
      title: 'Em ổn không ?',
      alt: 'Em ổn không ?',
    },
    {
      video: 'https://www.youtube.com/watch?v=29JQT25fdYo',
      title: 'Tình sầu thiên thu muôn lối',
      alt: 'Tình sầu thiên thu muôn lối',
    },
    {
      video: 'https://www.youtube.com/watch?v=QMpDF4opxyQ',
      title: 'Là ai mang nắng đi xa',
      alt: 'Là ai mang nắng đi xa',
    },
    {
      video:
        'https://www.youtube.com/watch?v=IPO-n-u2jOA&list=RDIPO-n-u2jOA&start_radio=1',
      title: 'Hóa tương tư',
      alt: 'Hóa tương tư',
    },
    {
      video:
        'https://www.youtube.com/watch?v=YBFuPtlyyGw&list=RDIPO-n-u2jOA&index=3',
      title: 'Chỉ muốn bên em lúc này',
      alt: 'Chỉ muốn bên em lúc này',
    },
  ];
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppComponent } from './app.component';
import { SlideImageComponent } from './Components/slide-image/slide-image.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlideVideoComponent } from './Components/slide-video/slide-video.component';

@NgModule({
  declarations: [AppComponent, SlideImageComponent, SlideVideoComponent],
  imports: [BrowserModule, NgImageSliderModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: "AIzaSyA6ISGzehKmfI3m7lPDYCkhOhwBQQ-isNI",
  authDomain: "sms-99226.firebaseapp.com",
  projectId: "sms-99226",
  storageBucket: "sms-99226.appspot.com",
  messagingSenderId: "820104473824",
  appId: "1:820104473824:web:550933d89e38c6c8613485",
  measurementId: "G-5N8YF4EYG9"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

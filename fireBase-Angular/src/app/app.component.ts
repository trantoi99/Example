import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import * as firebase from 'firebase';
import {WindowService} from '../app/window.service'
import { FirebaseApp } from '@angular/fire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  
export class AppComponent {

  title = 'fireBase-Angular';
  windowRef: any = '';
  phoneNumber = new PhoneNumber();
  verificationCode: string;
  user: any;

  sendLoginCode() {

    const appVerifier = this.windowRef.recaptchaVerifier;

    const num = this.phoneNumber.e164;

    firebase.default.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {

                this.windowRef.confirmationResult = result;

            })
            .catch( error => console.log(error) );

  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {
                    this.user = result.user;

    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }


  constructor(private db: AngularFirestore, private win : WindowService) {
    
    this.windowRef = this.win.WindowRef;
    this.windowRef.recaptchaVerifier = new firebase.default.auth.RecaptchaVerifier('recaptcha-container');

    this.windowRef.recaptchaVerifier.render()
  }
}
export class PhoneNumber{
  country: string;
  area: string;
  prefix: string;
  line: string;

  get e164() {
    const num = this.country + this.area + this.prefix + this.line;
    return `+${num}`;
  }
} 

import { Injectable } from '@angular/core';
//this is importing the prebuilt authorization from firebase
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  //login method
  login() {
    console.log('success');
  }

}

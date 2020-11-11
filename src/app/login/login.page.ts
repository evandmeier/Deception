import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { RegisterPage } from "../register/register.page";

export class User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: User = new User();
  public navParams = new NavParams();
  constructor(
    //dependency injection - taking the authservice from auth.service.ts and making it usable on this page https://angular.io/guide/architecture-services
    public navCtrl: NavController,
    public fAuth: AngularFireAuth
  ) {
  }

  async login() {
    try {
      var r = await this.fAuth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        console.log("Successfully logged in!");
        this.navCtrl.navigateRoot('home');
      }
    } catch (err) {
      console.error(err);
    }
  }

  //ngOnIt is similar to onstart in android
  ngOnInit() {
  }

  //this is used to call on the button to go to the register page. Dont forget to import
  //the page you need at the top of the screen
  navigateToRegisterPage(): void {
    this.navCtrl.navigateForward('register')
  }
}

import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { LoginPage } from "../login/login.page";

export class User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public user: User = new User();
  public navParams = new NavParams();
  constructor(
    //dependency injection - taking the authservice from auth.service.ts and making it usable on this page https://angular.io/guide/architecture-services
    public navCtrl: NavController,
    public fAuth: AngularFireAuth
  ) {
  }
  async register() {
    try {
      var r = await this.fAuth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (r) {
        console.log("Successfully Registered!");
        this.navCtrl.navigateRoot('login');
      }
    } catch (err) {
      console.error(err);
    }
  }

  ngOnInit() {
  }

  //this is used to call on the button to go to the login page. Dont forget to import
  //the page you need at the top of the screen
  navigateToLoginPage(): void {
    this.navCtrl.navigateForward('login')
  }
}


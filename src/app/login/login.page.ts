import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';

//this one is importing from auth.service.ts
//import { AuthService } from '../providers/auth.service';

//the import above would be the correct way, this import is the fast way lol may want to change later
//but for now just want to get it working. 
import { AngularFireAuth } from '@angular/fire/auth';

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
    //private authService: AngularFireAuth
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

  ngOnInit() {
  }

  //login method calling the login method from the auth that we built
  // login() {
  //   this.authService.login();
  // }

}

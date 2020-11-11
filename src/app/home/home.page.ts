import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { RegisterPage } from "../register/register.page";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public navParams = new NavParams();

  constructor(
    public navCtrl: NavController,
    public fAuth: AngularFireAuth
  ) { }

  logout() {
    this.fAuth.signOut();
    this.navCtrl.navigateRoot('login');
    console.log('sign out successful');
  }

}

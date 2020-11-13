import { Component } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { RegisterPage } from "../register/register.page";
import { AlertController } from '@ionic/angular';
import { userInfo } from 'os';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public navParams = new NavParams();

  constructor(
    public navCtrl: NavController,
    public fAuth: AngularFireAuth,
    public alertController: AlertController
  ) { }

  //actual logout function
  logout() {
    this.fAuth.signOut();
    this.navCtrl.navigateRoot('login');
    console.log('sign out successful');
  }

  //popup to confirm the logout
  async confirmLogout() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm Logout',
      message: ' Are you sure you want to <strong>Logout</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            this.logout();
            console.log('Successfully used the alert to logout as well');
          }
        }
      ]
    });
    await alert.present();
  }

}

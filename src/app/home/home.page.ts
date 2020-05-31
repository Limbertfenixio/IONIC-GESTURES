import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _navCtrl: NavController) {}


  goDoubleClick(){
    this._navCtrl.navigateForward('/doble-click');
  }

  goOnPresed(){
    this._navCtrl.navigateForward('/on-pressed');
  }

  goSwipe(){
    this._navCtrl.navigateForward('/swipe');
  }

  goSlideDrawer(){
    this._navCtrl.navigateForward('/slide-drawer');
  }

  goPinch(){
    this._navCtrl.navigateForward('/pinch');
  }

  goDragDrop(){
    this._navCtrl.navigateForward('/drag-drop');
  }
}

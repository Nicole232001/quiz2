import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { LamparaPage } from '../lampara/lampara';
import { TvPage } from '../tv/tv';
import { SmartPage } from '../smart/smart';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 bocina=BocinaPage;
 lamp=LamparaPage;
 tv=TvPage;
 smart=SmartPage;

  constructor(public navCtrl: NavController) {

  }
  bocinaa(){
    this.navCtrl.push(this.bocina)
  }
  tvv(){
    this.navCtrl.push(this.tv)
  }
  smartt(){
    this.navCtrl.push(this.smart)
  }
  lampp(){
    this.navCtrl.push(this.lamp)
  }
}

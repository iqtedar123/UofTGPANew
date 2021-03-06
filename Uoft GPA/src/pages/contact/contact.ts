import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { InAppBrowser, AdMob } from 'ionic-native';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
    constructor(public navCtrl: NavController, private platform: Platform) {
        this.platform = platform;
        //let options = {
        //    adId: 'ca-app-pub-3940256099942544/6300978111',
        //    adSize: 'SMART_BANNER',
        //    isTesting: false
        //};

       
        platform.ready().then(() => {

            
            var testId = 'ca-app-pub-6937425280917661/1053575230';
            var productionId = 'ca-app-pub-6937425280917661/1053575230';
            AdMob.createBanner({
                adId: productionId,
                adSize: 'SMART_BANNER',
                isTesting: false
            }).then(() => {
                AdMob.showBanner(2);
            });

        });
    }
    openFacebook() {
        window.open('https://www.facebook.com/TechMeister786/?view_public_for=697666376935125');
    }
    openTwitter() {
        window.open('https://twitter.com/iQtedar_C');
    }
}

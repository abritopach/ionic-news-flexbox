import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { NewsServiceProvider } from '../../providers/news-service/news-service';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    articles: any;
    newsSources: string = "abc-news-au";

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController,
                public newsServiceProvider: NewsServiceProvider) {

    }

    ionViewDidLoad() {

        let loading = this.loadingCtrl.create({
            content: "Loading Videos..."
        });

        loading.present();
        this.newsServiceProvider.getHeadlines(this.newsSources)
            .then(data => {
                //console.log(data);
                this.articles = data;
                loading.dismiss();
            });
    }

    onSegmentClicked(event) {

        let loading = this.loadingCtrl.create({
            content: "Loading Videos..."
        });

        loading.present();
        this.newsServiceProvider.getHeadlines(this.newsSources)
            .then(data => {
                //console.log(data);
                this.articles = data;
                loading.dismiss();
            });
    }

}

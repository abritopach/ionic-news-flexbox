import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the NewsServiceProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class NewsServiceProvider {

    data: any;
    static NEWS_ENDPOINT: string = 'https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=019e79c431f342959264c7800168f771';

    constructor(public http: Http) {
        console.log('Hello NewsServiceProvider Provider');
    }

    getHeadlines() {
        // Don't have the data yet.
        return new Promise(resolve => {

            // We're using Angular HTTP provider to request the data,
            // then on the response, it'll map the JSON data to a parsed JS object.
            // Next, we process the data and resolve the promise with the new data.
            //this.http.get(this.environment.getURL() + 'shopping_list/getAll', { search: params })
            this.http.get(NewsServiceProvider.NEWS_ENDPOINT)
                .map(res => res.json())
                .subscribe(data => {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    console.log(data);
                    this.data = data;
                    resolve(this.data.articles);
                },
                    err => {
                    console.log("ERROR -> " + JSON.stringify(err));
                });
        });
    }

}

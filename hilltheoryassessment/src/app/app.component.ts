import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Model } from './model';

const xml2js = require('xml2js');

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  RssData!: Model;
  Object: any;
  result: any;
  title: any;
  searchParams!: { title: ''; };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const requestOptions: Object = {
      observe: 'body',
      responseType: 'text',
    };
    this.http
      .get<any>(
        'https://timesofindia.indiatimes.com/rssfeedstopstories.cms',
        requestOptions
      )
      .subscribe((data) => {
        const parseString = xml2js.parseString;
        parseString(data, (err: any, result: Model) => {
          this.RssData = result;
          console.log(result);
        });
      });
  }

}

// tslint:disable-next-line:no-empty-interface
export interface IRssData {}

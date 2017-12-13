import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operator/map';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '@app/core';
import { URLS } from '@app/core';


@Component({
  selector: 'sw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchField: any;
  searchList: Array<string> = [];
  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  search() {
    this.searchList.length = 0;
    combineLatest(
      this.http.get(URLS.films + `?search=${this.searchField}`),
      this.http.get(URLS.people + `?search=${this.searchField}`),
      this.http.get(URLS.planets + `?search=${this.searchField}`),
      this.http.get(URLS.species + `?search=${this.searchField}`),
      this.http.get(URLS.starships + `?search=${this.searchField}`),
      this.http.get(URLS.vehicles + `?search=${this.searchField}`)
    ).subscribe((data: any) => {
      const compileData = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].results[0]) {
          compileData.push(...data[i].results.map(item => {
            console.log(item);
            if (item && item.url) {
              item.url = item.url.replace('https://swapi.co/api/', '');
            }
            return item;
          }));
        }
      }
      this.searchList = compileData;
      return compileData;
    });
  }

  openDetail(event, item) {
    event.preventDefault();
    console.log(item);
  }
}

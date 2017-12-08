import { PRIVACY_PRIVATE } from 'tslint/lib/rules/completedDocsRule';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sw-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  list: any;
  sortCriteria: String = 'title';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.list = data.data.results.map(item => {
        item.url = item.url.replace('https://swapi.co/api/', '');
        return item;
      });
    });
  }

  changeSorting(param) {
    this.sortCriteria = param;
  }
}

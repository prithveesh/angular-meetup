import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../core/services/http.service';

@Component({
  selector: 'sw-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  list: any;
  nextLink: any;
  previousLink: any;
  sortCriteria: String = 'title';
  constructor(private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.parseData(data.data);
    });
  }

  parseData(data: any) {
    this.nextLink = data.next;
    this.previousLink = data.previous;
    this.list = data.results;
  }

  changeSorting(param) {
    this.sortCriteria = param;
  }

  next(event) {
    event.preventDefault();
    this.http.get(this.nextLink).subscribe(data => this.parseData(data));
  }

  previous(event) {
    event.preventDefault();
    this.http.get(this.previousLink).subscribe(data => this.parseData(data));
  }

}

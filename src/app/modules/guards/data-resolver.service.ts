import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpService } from '@app/core';
import { URLS } from '@app/core';

@Injectable()
export class DataResolverService implements Resolve<any> {

  constructor(private httpService: HttpService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.httpService.get(URLS[route.url[0].path]);
  }
}

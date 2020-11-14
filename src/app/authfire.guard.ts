import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthfireGuard implements CanActivate {

  isLogined = false;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
  ){

  }


  canActivate( 
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> {
      return this.afAuth.authState.pipe(
        map(user => user !== null && !user.isAnonymous),
        map(isLogined => isLogined || this.router.createUrlTree(['login']))
      )

  };
}

  

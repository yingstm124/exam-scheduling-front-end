import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from  'firebase/app';
import { LoadingService } from './loading.service'


@Injectable({
  providedIn: 'root'
})

export class LoginService {


  constructor(
    public afAuth: AngularFireAuth,
    private route: Router,
    private loadingServ: LoadingService
  ) 

  { }

  GoogleAuth(){

    console.log('google auth')
    
    var provider = new auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    auth().signInWithRedirect(provider)
    
  }

  checkAuthStatus(){

    console.log('check Auth')
    
    this.loadingServ.requestStarted();

    this.afAuth.onAuthStateChanged(user => {
      
      if(user){
        console.log(user)
        this.loadingServ.requestEnded();
        this.route.navigate([''])
      }else{

        this.loadingServ.resetLoader();
        this.route.navigate(['login'])
      }
    })
  }

  
}

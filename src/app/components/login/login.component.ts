import { Component, OnInit } from '@angular/core';
import { LoginService  } from '../../service/login.service'
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

import { auth } from  'firebase/app';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogined;
  showLoader = false;

  constructor(
    public afAuth: AngularFireAuth,
    private route: Router,
    private loginServ: LoginService

  ) { 
    
  }

  ngOnInit(): void{
    this.loginServ.checkAuthStatus()
  }

  loginWithGoogle(){

    this.loginServ.GoogleAuth()
    //this.route.navigate([''])

    //this.showLoader = true;
    //auth().signInWithRedirect(new auth.GoogleAuthProvider).then(() => {
    //  this.route.navigate([''])
    //})

  }

  
  

  

}

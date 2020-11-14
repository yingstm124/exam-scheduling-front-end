import { Component } from '@angular/core';
import { LoginService } from './service/login.service'
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'se-project';

  isLogined = false;
  displayNameUser;
  emailUser;
  photoUrlUser;

  constructor(
    private loginServ: LoginService,
    private route: Router,
    private afAuth: AngularFireAuth
  ){  
    
    this.afAuth.onAuthStateChanged(user => {
      if(user){
        console.log("display name")

        this.displayNameUser = user.displayName
        this.emailUser = user.email
        this.photoUrlUser = user.photoURL

        this.isLogined = true;
      }
      else {
        this.isLogined = false;
        this.route.navigate(['login'])
      }
    })

  }
  
  ngOnInit(){

    
  }

  
  logout() {
    console.log("logout")

    this.afAuth.signOut()
    .then(() => {
      alert("logout sccess !");
      this.isLogined = false
      this.route.navigate(['']) 
    })
    .catch((err) => {
      console.log(err)
    })
  }

}



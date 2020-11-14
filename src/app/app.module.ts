import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDbServiceService } from './service/memory.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
//import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFirestore } from '@angular/fire/firestore';

import { ExamService } from './service/exam.service';
import { LoadingService } from './service/loading.service';
import { LoginService } from './service/login.service';


import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ManageExamComponent } from './components/manage-exam/manage-exam.component';
import { LoadingComponent } from './components/loading/loading.component';


var config = {
  apiKey: "AIzaSyCf0uVnOb2fm-dzads74k_AoABpKIWhBn8",
  authDomain: "se-project-43eea.firebaseapp.com",
  databaseURL: "https://se-project-43eea.firebaseio.com",
  projectId: "se-project-43eea",
  storageBucket: "se-project-43eea.appspot.com",
  messagingSenderId: "61147339931",
  appId: "1:61147339931:web:53b2599042461ca1383a3e",
  measurementId: "G-2W5HDBXX1J"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ManageExamComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    // AngularFirestore,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDbServiceService, { dataEncapsulation: false }
    )
    // HttpClientModule
    //BrowserAnimationsModule 
  ],
  providers: [
    AngularFireAuth,
    ExamService,
    LoadingService,
    LoginService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

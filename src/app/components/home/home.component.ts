import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  semesterForm;

  terms = [1,2]
  years = [2020,2021]

  constructor(

    public formBuilder: FormBuilder,
    public loginServ: LoginService,
    public route: Router

  ) { 

    this.loginServ.checkAuthStatus();
    
    this.semesterForm = this.formBuilder.group({
      term: [''],
      year: ['']    
    })
    
  }

  onSubmit() {

    //console.log(typeof(this.semesterForm.value.term))
    if(this.semesterForm.value.term !== "" && this.semesterForm.value.year !== ""){
      this.route.navigate(['/manage', this.semesterForm.value.term, this.semesterForm.value.year])
    }
    else{
      alert("select term or year")
    }
    
  }

  ngOnInit(){
    this.loginServ.checkAuthStatus();
  }


  

  

  

}

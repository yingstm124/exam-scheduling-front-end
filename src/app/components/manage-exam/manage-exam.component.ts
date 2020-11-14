import { Component, OnInit, Input } from '@angular/core';
import { NgbModal,  NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';

import { Semester } from '../../model/semester';
import { ExamService } from '../../service/exam.service';
import { Room } from '../../model/room';
import { Exam } from '../../model/exam';
import { Course } from '../../model/course';
import { Student } from '../../model/student';
import { Period } from '../../model/period';

import { Examiner } from 'src/app/model/examiner';
import { Exroom } from 'src/app/model/exRoom';

@Component({
  selector: 'app-manage-exam',
  templateUrl: './manage-exam.component.html',
  styleUrls: ['./manage-exam.component.css']
})

export class ManageExamComponent implements OnInit {

  open_grid = true
  semester: Semester

  term:number ;
  year:number ;

  courses;
  students:Student[];

  count = 4;

  rooms;
  exams;
  examiners;
  periods;
  exam;

  periods_day1: Period[];
  periods_day2: Period[];
  periods_day3: Period[];
  periods_day4: Period[];
  periods_day5: Period[];
  periods_day6: Period[];
  periods_day7: Period[];


  public selectPeriod;
  public selectDate;
  public selectCourse;
  public selectRoom;
  public selectExaminer;


  dates = [new Date(2020,10,1), new Date(2020,10,2), new Date(2020,10,3), new Date(2020,10,4), new Date(2020,10,5), new Date(2020,10,6), new Date(2020,10,7)]



  constructor(
    public modalService: NgbModal,
    public modalService2: NgbModal,
    private activeRoute: ActivatedRoute,
    private examServ: ExamService,

  ) 
  { 
    // this.semester.term = this.activeRoute.snapshot.params.term
    // this.semester.year = this.activeRoute.snapshot.params.year
    
  }

  ngOnInit(){
    this.activeRoute.paramMap.subscribe(params => {
      this.term = +params.get('term')
      this.year = +params.get('year')

      console.log("term "+ this.term + " year"+this.year)

      let a = 1;
      this.examServ.getAllExam().subscribe(exam => this.exams = exam)
      this.examServ.getAllRoom().subscribe(room => this.rooms = room)
      this.examServ.getAllCourse().subscribe(course => this.courses = course)
      this.examServ.getAllExaminer().subscribe(examiner => this.examiners = examiner)
      this.examServ.getAllPeriod().subscribe(period => this.periods = period)
      
    
      // this.examServ.getPeriod(new Date(2020,10,1)).subscribe(pd => this.periods_day1.push(pd))
      
    })
  }

  addExam(){

    console.log(this.selectCourse)
    console.log(this.selectRoom)
    console.log(this.selectExaminer)
    window.confirm('add Exam')
    //this.examServ.getAllExam().subscribe(exam => this.exams = exam)
  }

  deleteExam(){
    window.confirm('Delete');   
  }

  displaytable(check:boolean) {
    this.open_grid = check
  }

  sendEmail(){
    window.confirm('Send Email');
  }

  open(content) {
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      var r = confirm('Do you want to send email')
      console.log(r)
    });
  }






  


}

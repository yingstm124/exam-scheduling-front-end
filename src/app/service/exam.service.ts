import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Exam } from '../model/exam';
import { Room } from '../model/room';
import { Course } from '../model/course';
import { Student } from '../model/student';
import { Period } from '../model/period';

import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore'
import { Examiner } from '../model/examiner';
import { Exroom } from '../model/exRoom';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  exam: Exam;
  room: Room;
  course: Course;
  std: Student;

  constructor(
    private http: HttpClient,
  ) { }

  private roomsURL = 'api/rooms';
  private examinerURL = 'api/examiners';
  private periodURL = 'api/periods';
  private examURL = 'api/exams';
  private courseURL = 'api/courses';
  private studentURL = 'api/students';
  private dateURL = 'api/dates';



  getPeriod(date:Date):Observable<Period>{
    console.log('get period')

    const url = `${this.periodURL}/${date}`
    
    return this.http.get<Period>(url);
  }

  getAllPeriod():Observable<Period[]>{
    console.log('get all period')

    return this.http.get<Period[]>(this.periodURL);
  }

  getDate():Observable<Date[]>{
    console.log('get date')

    return this.http.get<Date[]>(this.dateURL);
  }

  getAllExam():Observable<Exam[]> {
    console.log('get All Exam')

    return this.http.get<Exam[]>(this.examURL);
  }

  getAllRoom():Observable<Room[]>{
    console.log('get all room')

    return this.http.get<Room[]>(this.roomsURL);
  }

  getAllCourse():Observable<Course[]>{
    console.log('get all course')

    return this.http.get<Course[]>(this.courseURL);
  }

  getAllExaminer():Observable<Examiner[]>{
    console.log('get all examiner')

    return this.http.get<Examiner[]>(this.examinerURL);
  }

  addExam(i:number, c:Course, ex:Examiner, r:Room, d:Date, p:number):Observable<Exam>{
    console.log('add exam')
    let Ex:Exam = {
      id: i,
      course: c,
      examiner: ex,
      room: r,
      date: d,
      period: p
    }
    return this.http.post<Exam>(this.examURL, Ex, httpOptions);
  }

  deleteExam(exroom: Exroom): Observable<void> {

    const url = `${this.periodURL}/${exroom.id}`
    return this.http.put<void>(url, exroom, httpOptions);
  }
  
}

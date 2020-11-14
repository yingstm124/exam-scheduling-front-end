import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private count = 0;
  private loading$ = new BehaviorSubject<string>('');

  constructor() { }

  getLoaderObserver(): Observable<string> {
    return this.loading$.asObservable();
  }

  requestStarted() {
    console.log('request started')
    if(++this.count === 1) {
      this.loading$.next('start')
    }

  }

  requestEnded() {
    console.log('request end')
    if(this.count === 0 || --this.count === 0){
      this.loading$.next('stop')
    }
  }

  resetLoader() {
    console.log('reset loader')
    this.count = 0
    this.loading$.next('stop')
  }
}

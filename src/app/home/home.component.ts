import { Component, OnInit,OnDestroy } from '@angular/core';
import  'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  numberObsSubscription :Subscription;
  customeObsSubscription :Subscription;
  constructor() { }

  ngOnInit() {
    
    const myNumber= Observable.interval(1000);//creation of Obeservable
    this.numberObsSubscription = myNumber.subscribe(
       (number:number)=>{
         console.log(number);
       }
     ); //subscribing the Observable
    const myObservation = Observable.create((observer:Observer<string>)=>{
      setTimeout(()=>{
        observer.next('first package');
      },2000),
      setTimeout(()=>{
        observer.next('second package');
      },5000)
      // setTimeout(()=>{
      //   observer.error('error occured');
      // },5000),
      setTimeout(()=>{
        observer.complete();
      },5000),
      setTimeout(()=>{
        observer.next('third package');
      },6000)
    }); //creation of Obeservable

    this.customeObsSubscription =  myObservation.subscribe(
      (data:string)=>{
        console.log(data);
      })
  }
  ngOnDestroy(){
    this.numberObsSubscription.unsubscribe();
    this.customeObsSubscription.unsubscribe();
  }

}

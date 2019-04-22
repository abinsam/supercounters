import { Component, OnInit, Input } from '@angular/core';
import { Counter } from '../counter';

@Component({
  selector: 'super-counter',
  templateUrl: './super-counter.component.html',
  styleUrls: ['./super-counter.component.css']
})
export class SuperCounterComponent implements OnInit {

  @Input()
  superCounter: Counter; 

  constructor() {
   
  }

  ngOnInit() {
  }



      //increment
  superIncrement(){
        this.superCounter.value+=3;
  } 
    superDecrement(){
    this.superCounter.value-=3;
  
  }
}

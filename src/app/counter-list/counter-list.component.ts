import { Component, OnInit, Input } from '@angular/core';
import {Counter} from '../counter';
@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  name = 'Counter Wall';
  counters: Counter[];
  
  constructor() { 
    this.counters=[];
  }
  superFlag = false;

  ngOnInit() {
  }

  @Input()
  counter: Counter; 
    //create() method 

  create(){
    const counter = new Counter();
    if(this.counters.length<=5){
        this.counters.push(counter);
    }
    else{
      this.superFlag=true;
      this.counters=[];
    }
  }

  createSc(){
    console.log("super counter create");
      const superCounter = new Counter();
      this.counters.push(superCounter);
  }
}

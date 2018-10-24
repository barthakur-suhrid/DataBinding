import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output() userInput=new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  pass(username:string){
    this.userInput.emit(username);
  }

}

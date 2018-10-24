import { Output,EventEmitter,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Output() userInput=new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }

  pass(username:string){
    this.userInput.emit(username);
  }
}

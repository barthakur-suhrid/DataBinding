import {Output, Component, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @Output() parentEvent=new EventEmitter<String>();
  constructor() { }

  ngOnInit() {
  }
  setUser(username:string){
    this.parentEvent.emit(username);
  }


}

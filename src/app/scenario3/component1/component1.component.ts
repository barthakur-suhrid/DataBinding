import { Component, OnInit } from '@angular/core';
import { Component2Component } from '../component2/component2.component';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
})
export class Component1Component implements OnInit {
  heroes=new Array('mr.BIG','Biggie','Shanky');
  master = 'Master';

  constructor() { }

  ngOnInit() {
  }

}

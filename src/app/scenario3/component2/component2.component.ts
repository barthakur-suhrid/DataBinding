import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  @Input() heroes: string[];
  @Input('master') masterName: string;

  
  constructor() { }

  ngOnInit() {
  }

}

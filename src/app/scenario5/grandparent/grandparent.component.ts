import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.css']
})
export class GrandparentComponent implements OnInit {
  value='Grandparent';
  constructor() { }

  ngOnInit() {
  }
  grandparent(value:string){
    this.value=value;
  }

}
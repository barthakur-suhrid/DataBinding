import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
    agreed=0;
    disagreed=0;

  constructor() { }

  ngOnInit() {
  }

  onVote(agreed:boolean){
   agreed?this.agreed++:this.disagreed++;
  }

}

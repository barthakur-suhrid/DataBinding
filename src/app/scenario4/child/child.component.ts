import { Component, OnInit,Output,EventEmitter ,Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() voted = new EventEmitter<boolean>();
  didVote=false;
  constructor() { }

  ngOnInit() {
  }

  vote(agreed:boolean){
    this.voted.emit(agreed);
    this.didVote=true;
  }

}

import { Output,EventEmitter,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  value='';
  setUser(username:string){
    this.value=username;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  title = 'Scenario1';

  value :string;
  ngOnInit() {
  }
  
  onSubmit(value){
    
    console.log(value);
  }

}

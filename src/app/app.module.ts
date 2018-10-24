import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { Component1Component } from './scenario3/component1/component1.component';
import { ParentComponent } from './scenario6/parent/parent.component';
//import { ChildComponent } from './scenario5/child/child.component';
//import { GrandparentComponent } from './scenario5/grandparent/grandparent.component';
import { Child1Component } from './scenario6/child1/child1.component';
import { Child2Component } from './scenario6/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,Child1Component, Child2Component, Child1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

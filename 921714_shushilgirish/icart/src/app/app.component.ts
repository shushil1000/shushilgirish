import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status1 = true;
  status2 = !this.status1;
  title = 'icart';
  constructor(private state1:Location){
this.state1.replaceState('/items');
  }
  click_to_changeP(){
    this.status1 = true;
    this.status2 = !this.status1;
  }
  click_to_changeC(){
    this.status2 = true;
    this.status1 = !this.status2;
  }
  
}

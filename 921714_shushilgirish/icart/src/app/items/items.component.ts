import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  num:number=0;
  status1 = true;
  status2 = !this.status1;
  constructor(private route:Router) { }
  
  ngOnInit(): void {
  }
  goToItemD(x:any){
    
    this.route.navigate(['/itemdetail'],{state:{example:x}});
   
  }
  Onfocus(x:number){
this.status2 = true;
this.status1 = !this.status2;
this.num = x;
  }
  Away(x:number){
this.status1 = true;
this.status2=!this.status1;
this.num = x;
  }

}

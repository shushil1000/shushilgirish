import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
// import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css']
})
export class ItemdetailComponent implements OnInit {
val:any
HEADING="";
URL="";
CODE="";
PRICE="";
items_arr=[
  {topic:"T500mA 0.5A 250V Rectangular Fuse",code:"6515",url:"../../assets/images/1.jpg",price:"$0.14"},
  {topic:"T6.3A 250V Rectangular Fuse",code:"5552",url:"../../assets/images/2.jpg",price:"$0.14"},
  {topic:"T5A 250V Rectangular Fuse",code:"5551",url:"../../assets/images/3.jpg",price:"$0.14"},
  {topic:"T4A 250V Rectangular Fuse",code:"5550",url:"../../assets/images/4.jpg",price:"$0.14"},
  {topic:"T3.15A 250V Rectangular Fuse",code:"5549",url:"../../assets/images/5.jpg",price:"$0.14"},
  {topic:"T2A 250V Rectangular Fuse",code:"5548",url:"../../assets/images/6.jpg",price:"$0.14"},
  {topic:"T1A 250V Rectangular Fuse",code:"5547",url:"../../assets/images/7.jpg",price:"$0.14"},
  {topic:"500mA PPTC Resettable Fuses",code:"4517",url:"../../assets/images/8.jpg",price:"$0.26"}
]
  constructor() { 
    this.val = history.state.example;
    for(let i=1;i<=8;i++){
      if(this.val == i.toString()){
        this.HEADING = this.items_arr[i-1].topic;
        this.URL = this.items_arr[i-1].url;
        this.CODE = this.items_arr[i-1].code;
        this.PRICE = this.items_arr[i-1].price;
        break;
      }
    }
  }
 
  ngOnInit(): void {
    
  }

}


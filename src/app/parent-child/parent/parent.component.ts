import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  myName = "Manish Sharma"
  constructor() { }

  ngOnInit() {
  }
  recivedFromChild(parcel){
    console.log(parcel)
this.myName = parcel;
  }
}

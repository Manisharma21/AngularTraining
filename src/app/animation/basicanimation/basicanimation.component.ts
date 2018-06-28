import { Component, OnInit } from '@angular/core';
import { trigger,state,transition,style,animate } from '@angular/animations'
@Component({
  selector: 'cts-basicanimation',
  templateUrl: './basicanimation.component.html',
  styleUrls: ['./basicanimation.component.css'],
  animations:[
    trigger("growUpAnimation",[
      state("kid",style({
        color:'pink',
        transform:"scale(1)"
      })),
      state("adult",style({
        color:'blue',
        transform:"scale(1.4)"
      })),
      transition('kid <=> adult',animate('500ms ease-in'))
    ])
  ]
})
export class BasicanimationComponent implements OnInit {

  defaultState:String = 'kid';
  constructor() { }

  ngOnInit() {
  }

  animateNow(){
    this.defaultState = this.defaultState =='adult'?'kid':'adult';
  }
}

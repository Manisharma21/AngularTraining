import { Component, OnInit } from '@angular/core';
import {LocalserviceService } from '../../myservices/localservice.service'

@Component({
  selector: 'cts-consume-local-service',
  templateUrl: './consume-local-service.component.html',
  styleUrls: ['./consume-local-service.component.css']
})
export class ConsumeLocalServiceComponent implements OnInit {

  constructor(private localservie:LocalserviceService) { 
    console.log(localservie.listSweets);
    console.log(localservie.sweets);
  }

  ngOnInit() {
    
  }

}

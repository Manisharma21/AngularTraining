import { Component, OnInit } from '@angular/core';
import { RemoteserviceService} from '../../myservices/remoteservice.service';
import { UserInfo } from '../../interface/user-info';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'cts-consume-remote-service',
  templateUrl: './consume-remote-service.component.html',
  styleUrls: ['./consume-remote-service.component.css']
})
export class ConsumeRemoteServiceComponent implements OnInit {

  constructor(private remoteService:RemoteserviceService) { 
   
  }
  userInfo:UserInfo;
  observableUserInfo:Observable<UserInfo>

  ngOnInit() {
    this.getRemoteData();
  }

  getRemoteData(){
    this.observableUserInfo = this.remoteService.getRemoteData();
    this.observableUserInfo.subscribe(
      (userInfo) =>{
      this.userInfo = userInfo
      console.log(userInfo);
      },
      
      (err:HttpErrorResponse) => {
        if(err.error instanceof Error)
        console.log("Server Side Error")
        else
        console.log("Client Side Error")
      }
    )
}
}

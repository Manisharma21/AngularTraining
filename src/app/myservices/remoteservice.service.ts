import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { UserInfo } from '../interface/user-info';
@Injectable()
export class RemoteserviceService {

  constructor(private httpClient: HttpClient) { }
  getRemoteData():Observable<UserInfo> {
    return this.httpClient.get<UserInfo>('http://jsonplaceholder.typicode.com/users');
}
}

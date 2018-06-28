import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }

}

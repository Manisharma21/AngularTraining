import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';



@Component({
  selector: 'cts-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor(private http:HttpClient) { }
  id:number;
  private headers = new Headers({'Content-Type':'application/json'})
  ngOnInit() {
    this.fetchData();
  }
 
  products = [];
  fetchData = function(){
    this.http.get("http://localhost:5555/products").subscribe(
      (res:Response) => {
        this.products = res;
      }
    )
  }

  deleteProduct = function(id){
    if(confirm("Are You Sure")){
      const url = `${"http://localhost:5555/products"}/${id}`;
    return this.http.delete(url,{headers: this.headers}).subscribe(
      () => {
        this.fetchData()
      }
    )
  }
}
}

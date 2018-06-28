import { Component, OnInit } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'cts-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productObj:object={};
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  confirmationString = "A new product has been added";
  isAdded:boolean  = false;
  addnewProduct = function(product){
    this.productObj = {
      "name":product.name,
      "colour":product.colour
    }
    this.http.post("http://localhost:5555/products/",this.productObj).subscribe(
      (res: Response) =>{
        console.log(res)
        this.isAdded = true;
      }
    )
  }
}

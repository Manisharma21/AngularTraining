import { Component, OnInit } from '@angular/core'
import { Response, Headers } from '@angular/http'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, Router }  from '@angular/router'

@Component({
  selector: 'cts-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private http:HttpClient) { }
id:number;
data:object = {};
productObj= {};
  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.id = +params['id'];
      const url = `${"http://localhost:5555/products"}/${this.id}`
      this.http.get(url).subscribe(
      (res:Response) => {
        this.data = res;
      }
    )
    })
  }

  updateProduct(product){
    this.productObj={
      "name":product.name,
      "colour":product.colour
    }
    
    const url = `${"http://localhost:5555/products"}/${this.id}`
    this.http.put(url,this.productObj).subscribe(
      () => {
        this.router.navigate(['/assignment']);
      }
    )
  }
}

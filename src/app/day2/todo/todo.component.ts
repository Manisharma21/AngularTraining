import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    task = ["Learn Angular 6", "Read about Eureka", "Have some fun ont he beach", "Jalebis in evening"]
    onetask = ""

    money = 50
    myDate = new Date()

    scores = [10, 8, 9, 5, 22 ]
    fruits = ["Banana", "Orange", "Apple", "Mango"];

    sortString = "asc"
    

    addTask = function(){
      console.log("addtask function called")
      this.task.push(this.onetask)
      this.onetask = ""
    }

    removeTask = function(received){
      console.log("removing this task")
      this.task.splice(received, 1)
    }

    sortNumberAsc = function(){
      console.log("sort dsc")
      this.sortString="dsc"
      console.log(this.sortString)
    }

  constructor() { }

  ngOnInit() {
    
  }

}

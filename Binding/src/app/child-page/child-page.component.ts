import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-page',
  templateUrl: './child-page.component.html',
  styleUrls: ['./child-page.component.css']
})
export class ChildPageComponent implements OnInit {
@Output() sendData = new EventEmitter<any>();

  userData: any = {fname: "", lname: "", age: "", gender: ""};
  constructor() { }

  ngOnInit(): void {
  }

  	TakeData()
  	{
		console.log(this.userData);
		this.sendData.emit(this.userData);
	}
}

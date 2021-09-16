import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DBServiceService } from '../service/dbservice.service';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {
@Input()
 userData!: any[];

@Output() sendData = new EventEmitter<any>();

	private dbser: DBServiceService;
	public showAddButton: boolean;
	
	// userData: any = {fname: "", lname: "", age: "", gender: ""};
	
	thePeople: string[][] =[ [ 'James', 'Smith', '33', 'm'],
									[ 'Alex', 'Kings', '26', 'm'],
									[ 'Jane', 'Nelson', '41', 'f'],
									[ 'Liz', 'Porter', '29', 'f']
	];

	theMakal: any = [];
	
  	constructor(private dbservice: DBServiceService) { 
		this.dbser = dbservice;
//		this.thePeople.forEach(item => this.dbser.PostToDB(item));
		this.showAddButton = true;

	}

  	ngOnInit(): void 
  	{
		this.dbser.GetData();
  	}

	ToggleButton()
	{
		this.showAddButton = !this.showAddButton;
		this.sendData.emit(this.userData.length);
	}

	TakeData()
	{
		//console.log(this.userData);
		//this.dbser.PostToDB(this.userData);
		this.dbser.GetData();
		console.log(this.theMakal);
		//this.index++;
	}
	
	receiveData(event:any)
	{
		this.theMakal.push(Object.assign({},event));
		console.log(this.theMakal);
	}
	
	onChange()
	{
		console.log("onChange has been called");
	}
}

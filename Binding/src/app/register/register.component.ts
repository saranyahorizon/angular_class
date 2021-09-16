import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../service/weatherapi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	private lclapi: WeatherapiService;
	result: any = [];
	public email: string;
	public desc: string;
	
  constructor(private api: WeatherapiService) { 
	this.lclapi = api;
	this.email = "";
	this.desc = "";
	}

  ngOnInit(): void {
	 this.lclapi.callAPI().subscribe(resp => this.result = resp);
  }

  showData()
  {
	if (this.result)
	{
		console.log(this.result);
		this.email = this.result.info.contact;
		this.desc = this.result.apis[0].description;
	}
	}
}

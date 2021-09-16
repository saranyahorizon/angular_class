import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
@ViewChild("loginpage", {static:false})loginpage:any;

  constructor(private router: Router) { }

  public login: any = {name: "", pwd: ""};
  ngOnInit(): void {
  }

  submit()
  {
	if(this.loginpage.valid){
		console.log("Success");
		this.router.navigateByUrl("/home-page");
	}
	else
	{ 
		Object.keys(this.loginpage.form.controls).forEach(key => {
			this.loginpage.form.get(key).markAsDirty();
			console.log("Key = "+ key);
		}
	 )};
	}
}

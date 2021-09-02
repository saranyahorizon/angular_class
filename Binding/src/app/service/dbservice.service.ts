import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DBServiceService {

	theMakal: any = [];
	
  constructor() { }
  
  PostToDB(userData: any[])
  {
	this.theMakal.push(userData);
  }
  
  GetData()
  {
	return this.theMakal;
  }
  
}

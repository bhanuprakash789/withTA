import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Forminfo } from './forminfo';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

	private httpOptions: any;
	public errors: any = [];

	constructor(private http: HttpClient,private _router: Router) {
		this.httpOptions = {
			headers: new HttpHeaders({'Content-Type': 'application/json'})
		};
	}

	public register(user): Observable<Forminfo> {
		return this.http.post<Forminfo>('http://127.0.0.1:8000/dashboardapi/instructors', user);
	}
	public login(user){
		user['is_instructor']=true;
		user['is_student']=false;
		this.http.post('http://127.0.0.1:8000/login/', user, this.httpOptions).subscribe(
			data => {
	    		this.updateData(data['token']);
	    		this._router.navigate(['/dashboardta']);
	      	},
	      	err => {
	      		console.log(err);
	        	this.errors = err['error'];
	        	alert("Wrong Credentials!");
	      	}
	    );
	}
	public registerTA(user): Observable<Forminfo> {
		return this.http.post<Forminfo>('http://127.0.0.1:8000/dashboardapi/ta', user);
	}
	public loginTA(user){
		user['is_TA']=true;
		user['is_instructor']=false;
		user['is_student']=false;
		this.http.post('http://127.0.0.1:8000/login/', user, this.httpOptions).subscribe(
			data => {
	    		this.updateData(data['token']);
	    		this._router.navigate(['/dashboardta']);
	      	},
	      	err => {
	      		console.log(err);
	        	this.errors = err['error'];
	        	alert("Wrong Credentials!");
	      	}
	    );
	}
	public refreshToken() {
	    return this.http.post('http://127.0.0.1:8000/refresh/', this.httpOptions).pipe(tap((token) => {
      this.updateData(token['token']);
    }));
  	}
  	public logout() {
	    localStorage.removeItem("JWT");
	}
	public isLoggedIn(){
		return !!this.getJWT();
	}
	private updateData(token) {
		localStorage.setItem("JWT",token);
		this.errors = [];
	}
	public getJWT(){
		return localStorage.getItem('JWT');
	}

}
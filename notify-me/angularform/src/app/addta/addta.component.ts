import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-addta',
  templateUrl: './addta.component.html',
  styleUrls: ['./addta.component.scss']
})
export class AddtaComponent implements OnInit {

  constructor(private dashboard:DashboardService,private fb: FormBuilder,private _router: Router, private activatedroute:ActivatedRoute) { }
  code:String;
  createform: FormGroup;
  ngOnInit(): void {
    this.code=this.activatedroute.snapshot.params['code'];
    this.createform = this.fb.group({
      ta_name:['',Validators.required]
    });
  }

  addTA(){
    this.dashboard.addta(this.createform.value, this.code).subscribe(
      data=>{
        alert('Successfully added '+ data['ta_name'] + 'as TA!');
        this._router.navigate(['/detail/'+this.code]);
      },
      error=>{
        console.log(this.createform.value,this.code);
        this._router.navigate(['/detail/'+this.code]);
        alert("TA doesn't exist");
      }
    )
  }


}

// export class DeadlinesComponent implements OnInit {
//   constructor(private dashboard:DashboardService,private fb: FormBuilder,private _router: Router, private activatedroute:ActivatedRoute) { }
//   code:String;
//   createform: FormGroup;
//   ngOnInit(): void {
//   	this.code=this.activatedroute.snapshot.params['code'];
// 	this.createform = this.fb.group({
// 		message: ['',Validators.required],
// 		hard: ['',Validators.required],
// 		end_date:['', Validators.required]
// 	});

//   }
//   create(){
// 		this.dashboard.createDeadline(this.createform.value, this.code).subscribe(
// 			data=>{
// 				alert('Successfully created the deadline '+data['message']+'!');
// 				this._router.navigate(['/detail/'+this.code]);
// 			},
// 			error=>{
// 				alert("Please login again");
// 			}
// 		)
// 	}


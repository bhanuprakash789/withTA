import { Component, OnInit } from '@angular/core';
import {ConfigService} from'../config.service';
import { Router } from '@angular/router';
import {DashboardService} from '../dashboard.service';


@Component({
  selector: 'app-dashboardta',
  templateUrl: './dashboardta.component.html',
  styleUrls: ['./dashboardta.component.scss']
})
export class DashboardtaComponent implements OnInit {

	constructor(private dashboardService: DashboardService, private configservice:ConfigService, private router:Router) { }

  ngOnInit(): void {
  }

  logoutta(){
		this.configservice.logout();
		this.router.navigate(['/login']);
	}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  addpatient: boolean = false;
  showpatient: boolean = false;
  addDoctor: boolean = false;
  showDoctor: boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.showAddPatient();
  }

  setOff() {
    this.addpatient = false;
    this.showpatient = false;
    this.addDoctor = false;
    this.showDoctor = false;
  }

  // show add patient section
  showAddPatient() {
    this.setOff();
    this.addpatient = true;
    this.router.navigate(['dashboard/add-patient']);
  }

  // show add doctor section
  showAddDoctor() {
    this.setOff();
    this.addDoctor = true;
    this.router.navigate(['dashboard/add-doctor']);
  }

  // show patient section
  showPatientSection() {
    this.setOff();
    this.showpatient = true;
    this.router.navigate(['dashboard/show-patient']);
  }

  // show doctor section
  showDoctorSection() {
    this.setOff();
    this.showDoctor = true;
    this.router.navigate(['dashboard/show-doctor']);
  }


}

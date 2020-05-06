import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  employee: any = [
    {"id":"1","employee_name":"Qadwad","employee_salary":"797","employee_age":"36"},
    {"id":"1925","employee_name":"Menaka6","employee_salary":"123","employee_age":"24501"},
    {"id":"1969","employee_name":"2381","employee_salary":"123","employee_age":"23"},
    {"id":"1970","employee_name":"6132","employee_salary":"123","employee_age":"23"},
    {"id":"1972","employee_name":"2022","employee_salary":"123","employee_age":"23"},
    {"id":"1973","employee_name":"Shylu","employee_salary":"123","employee_age":"23"},
    {"id":"1976","employee_name":"test-123","employee_salary":"123","employee_age":"23"},
    {"id":"1977","employee_name":"test-153","employee_salary":"123","employee_age":"23123"},
    {"id":"1981","employee_name":"test-232","employee_salary":"123","employee_age":"23"},
    {"id":"1998","employee_name":"test-344","employee_salary":"123","employee_age":"23"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

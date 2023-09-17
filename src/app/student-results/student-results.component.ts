import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BaseUrl } from '../backEndUrl';

@Component({
  selector: 'app-student-results',
  templateUrl: './student-results.component.html',
  styleUrls: ['./student-results.component.scss']
})
export class StudentResultsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  student!: any;

  ngOnInit(): void {
    this.getStudent()
  }

  getStudent() {
    this.http.get(`${BaseUrl}/registration/student`, { withCredentials: true }).subscribe(
      res => this.student = res
    )
  }
}

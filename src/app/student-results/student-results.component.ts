import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BaseUrl } from '../backEndUrl';
import { Emmiters } from '../emmiters/emmiters';

@Component({
  selector: 'app-student-results',
  templateUrl: './student-results.component.html',
  styleUrls: ['./student-results.component.scss']
})
export class StudentResultsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  regNo!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  units!: any[];

  message = ''


  ngOnInit(): void {
    this.getStudent()
  }

  getStudent() {
    this.http.get(`${BaseUrl}/registration/student`, { withCredentials: true })
      .subscribe({
        next: (res: any) => {
          this.regNo = res.regNo;
          this.firstName = res.firstName;
          this.lastName = res.lastName;
          this.email = res.email;
          this.units = res.units;
          Emmiters.authEmmiter.emit(true)
        },
        error: () => {
          this.message = "You are not logged in",
            Emmiters.authEmmiter.emit(false)
        }
      })
  }
}

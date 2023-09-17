import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseUrl } from '../backEndUrl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      regNo: '',
      password: ''
    })
  }

  submit(): void {
    this.http.post(`${BaseUrl}/registration/login`, this.form.getRawValue(), { withCredentials: true })
      .subscribe(() => this.router.navigate(['/student-results']))
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseUrl } from '../backEndUrl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      regNo: '',
      password: ''
    }
    )
  }

  submit(): void {
    this.http.post(`${BaseUrl}/registration/register`, this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/login']))
  }
}

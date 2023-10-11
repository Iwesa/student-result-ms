import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      regNo: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  submit(): void {
    this.http.post(`${BaseUrl}/registration/login`, this.form.getRawValue(), { withCredentials: true })
      .subscribe({
        next: () => this.router.navigate(['/student-results']),
        error: (error) => console.log(error)
      })
  }

  get regNo(): FormControl {
    return this.form.get('regNo') as FormControl
  }

  get pwd(): FormControl {
    return this.form.get('password') as FormControl
  }
}

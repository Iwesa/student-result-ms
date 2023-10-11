import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      regNo: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    }
    )
  }

  submit(): void {
    this.http.post(`${BaseUrl}/registration/register`, this.form.getRawValue())
      .subscribe(() => this.router.navigate(['/login']))
  }

  get regNo(): FormControl {
    return this.form.get('regNo') as FormControl
  }

  get pwd(): FormControl {
    return this.form.get('password') as FormControl
  }
}

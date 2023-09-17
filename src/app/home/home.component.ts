import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      user: ''
    })
    this.getUser()
  }

  getUser(): void {
    if (this.form.getRawValue()['user'] == 'student') {
      this.router.navigate(['/login'])
    }
    if (this.form.getRawValue()['user'] == 'admin') {
      this.router.navigate(['/admin'])
    }
  }
}

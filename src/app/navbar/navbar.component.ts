import { Component, OnInit } from '@angular/core';
import { Emmiters } from '../emmiters/emmiters';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '../backEndUrl';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    Emmiters.authEmmiter.subscribe(
      (auth: boolean) => {
        this.isAuthenticated = auth
      }
    )
  }

  logout(): void {
    this.http.post(`${BaseUrl}/registration/logout`, {}, { withCredentials: true })
      .subscribe(() => this.isAuthenticated = false)
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { UnitComponent } from './unit/unit.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StudentResultsComponent } from './student-results/student-results.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'unit', component: UnitComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'student-results', component: StudentResultsComponent },
  { path: 'home', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Unit } from './unit.model';
import { Observable } from 'rxjs';
import { BaseUrl } from './backEndUrl';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  backEndUrl!: string;

  constructor(private http: HttpClient) {
    this.backEndUrl = 'http://localhost:3000'
  }

  postStudent(student: Student) {
    return this.http.post(`${this.backEndUrl}/students`, student)
  }

  createUnits(regNo: string, unit: Unit) {
    return this.http.post(`${this.backEndUrl}/${regNo}/units`, unit)
  }

  getStudents(): Observable<any> {
    return this.http.get(`${this.backEndUrl}/students`)
  }

  deleteStudent(id: number) {
    return this.http.delete(`${this.backEndUrl}/students/${id}/delete`)
  }

  update(student: Student) {
    return this.http.post(`${BaseUrl}/students/${student.id}/update`, student)
  }
}

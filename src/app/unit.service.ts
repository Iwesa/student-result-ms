import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseUrl } from './backEndUrl';
import { Unit } from './unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  constructor(private http: HttpClient) { }

  getStudentUnits(id: number) {
    return this.http.get(`${BaseUrl}/units/${id}/student`)
  }

  getOneStudent(id: number | null) {
    return this.http.get(`${BaseUrl}/students/${id}`)
  }

  createUnit(id: number, unit: Unit) {
    return this.http.post(`${BaseUrl}/units/${id}/student`, unit)
  }

  update(unit: Unit) {
    return this.http.post(`${BaseUrl}/units/${unit.code}/update`, unit)
  }

  delete(code: string) {
    return this.http.delete(`${BaseUrl}/units/${code}/delete`)
  }
}

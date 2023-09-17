import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnitService } from '../unit.service';
import { Unit } from '../unit.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {
  student!: any;

  //Fields for unit
  code!: string;
  name!: string;
  cat1!: number;
  cat2!: number;
  exam!: number;

  constructor(private unitService: UnitService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.refresh()
  }

  createUnits() {
    const unit: Unit = {
      code: this.code,
      name: this.name,
      cat1: this.cat1,
      cat2: this.cat2,
      exam: this.exam
    }

    const id = this.getId()
    this.unitService.createUnit(id, unit).subscribe(data => {
      if (data) {
        this.refresh()
      }
    })
  }

  update(unit: Unit) {
    this.unitService.update(unit).subscribe(data => {
      if (data) {
        this.refresh()
      }
    })
  }

  delete(unit: Unit) {
    this.unitService.delete(unit.code).subscribe(data => {
      if (data) {
        this.refresh()
      }
    })
  }

  getStudentUnits() {
    const id = this.getId()
    return this.unitService.getStudentUnits(id)
      .subscribe(studentUnit => this.student = studentUnit)
  }

  getId() {
    return Number(this.route.snapshot.paramMap.get('id'))
  }


  refresh() {
    this.getStudentUnits()
  }
}

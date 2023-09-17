import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  // Fields for student
  id!: number;
  regNo!: string;
  firstName!: string;
  lastName!: string;
  email!: string;

  //List of students
  studentsList!: any[];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.refresh()
  }

  submit() {
    const student: Student = {
      id: this.id,
      regNo: this.regNo,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    }

    this.studentService.postStudent(student)
      .subscribe(data => {
        if (data) {
          this.refresh()
        }
      })

  }

  deleteStudent(student: Student) {
    this.studentService.deleteStudent(student.id).subscribe(
      data => {
        if (data) {
          this.refresh()
        }
      }
    )
  }

  refresh() {
    this.studentService.getStudents().subscribe(data => {
      this.studentsList = data
    })
  }

  update(student: Student) {
    this.studentService.update(student).subscribe(data => {
      if (data) {
        this.refresh()
      }
    })
  }

}

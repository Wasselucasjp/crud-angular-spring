import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent {
  courses:Observable<Course[]>;

  displayedColumns: string[] = ['name', 'category'];

  //coursesService: CoursesService;

  constructor(private coursesService: CoursesService) {
    //this.courses = []
    //this.coursesService = new CoursesService();  
    this.courses = this.coursesService.findAll();
  }

  ngOnInit(): void {
  }
}

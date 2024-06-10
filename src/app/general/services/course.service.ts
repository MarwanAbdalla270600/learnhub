import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course-card';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly http = inject(HttpClient);
  private readonly jsonUrl = 'assets/data/courses.json'

  public readonly courses$ = this.http.get<Course[]>(this.jsonUrl);

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.jsonUrl);
  }

  getCourseByName(name: string) {

  }

}

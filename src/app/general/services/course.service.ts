import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../models/course-card';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private readonly httpClient = inject(HttpClient);
  private readonly jsonUrl = 'assets/data/courses.json'

  public readonly courses$ = this.httpClient.get<Course[]>(this.jsonUrl);

  getAllCourses(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.jsonUrl);
  }

  getCourseByName(name: string) {
    
  }

}

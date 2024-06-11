import { Component, OnInit, inject } from '@angular/core';
import { CourseService } from '../general/services/course.service';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../general/components/course-card/course-card.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, combineLatest, map, startWith, switchMap } from 'rxjs';
import { Course, CourseSortValues, } from '../general/models/course-card';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [CommonModule, CourseCardComponent, ReactiveFormsModule, DropdownModule, ButtonModule, InputTextModule],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css'
})
export class CoursePageComponent {

  //Services
  private readonly courseService = inject(CourseService);
  private readonly fb = inject(FormBuilder);

  //Variables
  sortValues: CourseSortValues[] = [CourseSortValues.Title, CourseSortValues.Price, CourseSortValues.Duration];

  searchForm: FormGroup = this.fb.group({
    name: [''],
    sort: [this.sortValues[0]]
  })

  filteredCourses$: Observable<Course[]> =
    combineLatest([
      this.searchForm.get('name')!.valueChanges.pipe(startWith('')),
      this.searchForm.get('sort')!.valueChanges.pipe(startWith(''))])
      .pipe(
        switchMap(([name, sort]) =>
          this.courseService.getAllCourses().pipe(
            map(courses => this.filterAndSortCourses(courses, name, sort))
          )
        )
      );


  private compareCourses(a: Course, b: Course, sort: CourseSortValues): number {
    switch (sort) {
      case CourseSortValues.Title:
        return a.title.localeCompare(b.title);
      case CourseSortValues.Price:
        return a.price - b.price;
      case CourseSortValues.Duration:
        return a.duration - b.duration;
      default:
        return 0;
    }
  }

  private filterAndSortCourses(courses: Course[], name: string, sort: CourseSortValues): Course[] {
    return courses
      .filter(course => course.title.toLowerCase().includes(name.toLowerCase()))
      .sort((a, b) => this.compareCourses(a, b, sort));
  }

}

import { Component, OnInit, inject } from '@angular/core';
import { CourseService } from '../general/services/course.service';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../general/components/course-card/course-card.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable, combineLatest, distinctUntilChanged, filter, map, startWith, switchMap, tap } from 'rxjs';
import { Course } from '../general/models/course-card';
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
export class CoursePageComponent implements OnInit {

  private readonly courseService = inject(CourseService);
  private readonly fb = inject(FormBuilder);

  public readonly courses$ = this.courseService.getAllCourses();
  public filteredCourses$: Observable<Course[]> = this.courses$;
  public sortValues = ['Alphabet', 'Price', 'Duration'];

  searchForm: FormGroup = this.fb.group({
    name: [''],
    sort: [this.sortValues[0]]
  })

  ngOnInit(): void {

    const name$ = this.searchForm.get('name')!.valueChanges.pipe(startWith(''));
    const sort$ = this.searchForm.get('sort')!.valueChanges.pipe(startWith(''));;

    this.filteredCourses$ = combineLatest([name$, sort$]).pipe(
      switchMap(([name, sort]) =>
        this.courses$.pipe(map(courses =>
          courses.filter(course => course.title.toLowerCase().includes(name.toLowerCase())).sort((a, b) => {
            switch (sort) {
              case 'Alphabet':
                return a.title.localeCompare(b.title);
              case 'Price':
                return a.price - b.price;
              case 'Duration':
                return a.duration - b.duration;
              default:
                return 0; // Add a default case to handle unexpected sort values
            }
          })
        ),
        )
      )
    )

    this.filteredCourses$.subscribe();


    /*this.filteredCourses$ = this.searchForm.get('name')!.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      switchMap((formControl) =>
        this.courses$.pipe(
          map(courses =>
            courses.filter(course => course.title.toLowerCase().includes(formControl.toLowerCase()))
          )
        )
      ),
    )*/
  }

  sortCoursesAfterPrice() {
    this.filteredCourses$ = this.filteredCourses$.pipe(
      map(courses => courses.sort((a, b) => a.price - b.price))
    );
  }


}

import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../general/models/course-card';
import { CourseCardComponent } from '../general/components/course-card/course-card.component';
import { CourseService } from '../general/services/course.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { HeaderComponent } from '../general/components/header/header.component';
import { NavigationItem } from '../general/models/navigation-item';
import { FooterComponent } from '../general/components/footer/footer.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CourseCardComponent, CommonModule, TranslocoModule, HeaderComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {


  private readonly courseService = inject(CourseService);
  private readonly translocoService = inject(TranslocoService);

  public courses$: Observable<Course[]> = this.courseService.getAllCourses().pipe(
    map(courses => courses.slice(-6)) // Get the last 6 elements
  );

  ngOnInit(): void {
    this.courses$.subscribe(x => console.log(x));
  }



}

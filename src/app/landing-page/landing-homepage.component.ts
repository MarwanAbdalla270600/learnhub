import { Component, OnInit, inject } from '@angular/core';
import { Course } from '../general/models/course-card';
import { CourseCardComponent } from '../general/components/course-card/course-card.component';
import { CourseService } from '../general/services/course.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

interface Navlink {
  name: string,
  url: string
}

@Component({
  selector: 'app-landing-homepage',
  standalone: true,
  imports: [CourseCardComponent, CommonModule],
  templateUrl: './landing-homepage.component.html',
  styleUrl: './landing-homepage.component.css'
})
export class LandingHomepageComponent implements OnInit {
 

  private readonly courseService = inject(CourseService);
  
  public courses$: Observable<Course[]> = this.courseService.getAllCourses().pipe(
    map(courses => courses.slice(-6)) // Get the last 6 elements
  );

  public logo: string = 'learnhub';

  public headerNavLinks: Navlink[] = [
    {
      name: 'Subscribe',
      url: '/'
    },
    {
      name: 'Courses',
      url: '/'
    },
    {
      name: 'Forum',
      url: '/'
    },
    {
      name: 'Contact',
      url: '/'
    }
  ]

  public footerNavLinks: Navlink[] = [
    {
      name: 'Terms of Use',
      url: '/'
    },
    {
      name: 'Privacy Policy',
      url: '/'
    }
  ]

  ngOnInit(): void {
    this.courses$.subscribe(x=>console.log(x));
  }
}

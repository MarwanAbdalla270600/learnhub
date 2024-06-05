import { Component, Input } from '@angular/core';
import { CourseCard } from '../../models/course-card';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() data!: CourseCard;


}

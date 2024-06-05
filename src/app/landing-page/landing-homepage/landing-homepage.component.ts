import { Component } from '@angular/core';
import { CourseCard } from '../../general/models/course-card';
import { CourseCardComponent } from '../../general/components/course-card/course-card.component';

interface Navlink {
  name: string,
  url: string
}

@Component({
  selector: 'app-landing-homepage',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './landing-homepage.component.html',
  styleUrl: './landing-homepage.component.css'
})
export class LandingHomepageComponent {

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

  public courses: CourseCard[] = [
    {
      imgUrl: 'assets/images/courses/warehouse.jpg',
      title: 'Complete Warehouse Course',
      description: 'Become the best coder you can be with unlimited access to all the existing and future courses',
      duration: 20,
      price: 15
    },
    {
      imgUrl: 'assets/images/courses/warehouse.jpg',
      title: 'Complete Warehouse Course',
      description: 'Become the best coder you can be with unlimited access to all the existing and future courses',
      duration: 20,
      price: 15
    },
    {
      imgUrl: 'assets/images/courses/warehouse.jpg',
      title: 'Complete Warehouse Course',
      description: 'Become the best coder you can be with unlimited access to all the existing and future courses',
      duration: 20,
      price: 15
    },
    {
      imgUrl: 'assets/images/courses/warehouse.jpg',
      title: 'Complete Warehouse Course',
      description: 'Become the best coder you can be with unlimited access to all the existing and future courses',
      duration: 20,
      price: 15
    },
    {
      imgUrl: 'assets/images/courses/warehouse.jpg',
      title: 'Complete Warehouse Course',
      description: 'Become the best coder you can be with unlimited access to all the existing and future courses',
      duration: 20,
      price: 15
    },
    {
      imgUrl: 'assets/images/courses/warehouse.jpg',
      title: 'Complete Warehouse Course',
      description: 'Become the best coder you can be with unlimited access to all the existing and future courses',
      duration: 20,
      price: 15
    },
    {
      imgUrl: 'assets/images/courses/warehouse.jpg',
      title: 'Complete Warehouse Course',
      description: 'Become the best coder you can be with unlimited access to all the existing and future courses',
      duration: 20,
      price: 15
    }
  ]
}

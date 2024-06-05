import { Component } from '@angular/core';

interface Navlink {
  name: string,
  url: string
}

@Component({
  selector: 'app-landing-homepage',
  standalone: true,
  imports: [],
  templateUrl: './landing-homepage.component.html',
  styleUrl: './landing-homepage.component.css'
})
export class LandingHomepageComponent {

  logo: string = 'learnhub';

  headerNavLinks: Navlink[] = [
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

  footerNavLinks: Navlink[] = [
    {
      name: 'Terms of Use',
      url: '/'
    },
    {
      name: 'Privacy Policy',
      url: '/'
    }
  ]
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './general/components/header/header.component';
import { FooterComponent } from './general/components/footer/footer.component';
import { NavigationItem } from './general/models/navigation-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learnhub';

  public headerNavLinks: NavigationItem[] = [
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

  public footerNavLinks: NavigationItem[] = [
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

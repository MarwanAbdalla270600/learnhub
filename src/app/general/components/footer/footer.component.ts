import { Component, Input } from '@angular/core';
import { NavigationItem } from '../../models/navigation-item';
import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() navigations: NavigationItem[] = [];

  icons: NavigationItem[] = [{
    name: 'pi-youtube',
    url: ''
  },
  {
    name: 'pi-linkedin',
    url: ''
  },
  {
    name: 'pi-facebook',
    url: ''
  },
  {
    name: 'pi-instagram',
    url: ''
  },
  {
    name: 'pi-twitter',
    url: ''
  }
  ]
}

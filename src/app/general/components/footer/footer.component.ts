import { Component, Input } from '@angular/core';
import { NavigationItem } from '../../models/navigation-item';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @Input() navigations: NavigationItem[] = [];
}

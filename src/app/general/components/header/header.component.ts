import { Component, Input } from '@angular/core';
import { NavigationItem } from '../../models/navigation-item';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() navigations: NavigationItem[] = [];
}

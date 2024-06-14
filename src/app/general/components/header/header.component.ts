import { Component, Input } from '@angular/core';
import { NavigationItem } from '../../models/navigation-item';
import { TranslocoModule } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslocoModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() navigations: NavigationItem[] = [];
}

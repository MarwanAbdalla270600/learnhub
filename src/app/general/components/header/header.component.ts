import { Component, Input } from '@angular/core';
import { NavigationItem } from '../../models/navigation-item';
import { TranslocoModule } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslocoModule, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() navigations: NavigationItem[] = [];
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from "@angular/material/button";


@Component({
  selector: 'app-menu-side-nav',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule, RouterModule, MatButtonModule],
  templateUrl: './menu-side-nav.component.html',
  styleUrl: './menu-side-nav.component.css'
})
export class MenuSideNavComponent {
  home = ['/dashboard', { outlets: { main: 'home' } }];

}

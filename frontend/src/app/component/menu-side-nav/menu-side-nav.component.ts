import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-menu-side-nav',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatIconModule,],
  templateUrl: './menu-side-nav.component.html',
  styleUrl: './menu-side-nav.component.css'
})
export class MenuSideNavComponent {

}

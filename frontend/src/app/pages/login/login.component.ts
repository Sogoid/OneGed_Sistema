import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule, MatCardModule, MatButtonModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  hide = true;

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from "@angular/material/button";
import { MyErrorStateMatcher } from '../../registration/register-user/register-user.component';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatFormFieldModule, MatCardModule, MatInputModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  type = false;

  hide = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  hideRequiredControl = new FormControl(false);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
  });
  constructor(private _formBuilder: FormBuilder) { }

}

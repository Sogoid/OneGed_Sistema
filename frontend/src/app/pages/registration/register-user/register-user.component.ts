import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from "@angular/material/button";
import { Observable } from 'rxjs';
import { PeriodicElementUser } from '../../../models/periodic-element-user.model';
import { CreateUser } from '../../../models/base-element.model';
import { UserService } from '../../../service/user.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form?.submitted;
    return !!(control?.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    ],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css',
  providers: [PeriodicElementUser]
})
export class RegisterUserComponent {
  userForm: FormGroup;
  optionsType: FormGroup;

  register$ = new Observable<PeriodicElementUser[]>();

  hide = true;

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  constructor(private _formBuilder: FormBuilder, private registerUser: PeriodicElementUser,
    private userService: UserService) {

    this.userForm = this._formBuilder.group({
      nameUser: ['', Validators.required],
      emailUser: ['', [Validators.required, Validators.email]],
      senhaUser: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
    });

    this.optionsType = this._formBuilder.group({
      statusUser: ['true', Validators.required],
      tipoUser: ['', Validators.required],

    });


  }

  saveUserClick() {
  if (this.userForm.valid) {
    const newUser: CreateUser = this.userForm.value;
    this.userService.createUser(newUser)
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => {
          console.log('Operação concluída');
        }
      });
  }
}



}

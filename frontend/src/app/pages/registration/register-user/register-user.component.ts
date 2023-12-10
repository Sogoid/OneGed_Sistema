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
import { SharedModule } from '../../../shared/shared.module';



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
    SharedModule,
  ],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css',
  providers: [PeriodicElementUser, UserService]
})
export class RegisterUserComponent {
  register$ = new Observable<PeriodicElementUser[]>();

  userForm: FormGroup;
  statusFormGroup: FormGroup;
  tipoFormGroup: FormGroup;


  hide = true;

  matcher = new MyErrorStateMatcher();

  constructor(private _formBuilder: FormBuilder, private registerUser: PeriodicElementUser,
    private userService: UserService) {

    this.userForm = this._formBuilder.group({
      nameUser: ['', Validators.required],
      emailUser: ['', [Validators.required, Validators.email]],
      senhaUser: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
    });

    this.statusFormGroup = this._formBuilder.group({
      statusUser: ['true', Validators.required],
    });

    this.tipoFormGroup = this._formBuilder.group({
      tipoUser: ['false', Validators.required],
    });
  }

  saveUserClick() {
    console.log('saveUserClick foi chamado');

    // Verifica se os formulários são válidos
    if (this.userForm.valid && this.statusFormGroup.valid && this.tipoFormGroup.valid) {
      // Combina os valores dos formulários em um único objeto
      const newUser: CreateUser = {
        ...this.userForm.value,
        ...this.statusFormGroup.value,
        ...this.tipoFormGroup.value
      };
      console.log(newUser);

      // Chama o serviço para criar o usuário
      this.userService.createUser(newUser)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.userForm.reset();
            this.statusFormGroup.reset();
            this.tipoFormGroup.reset();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            console.log('Operação concluída');
          }
        });
    }

    // Log de erros, se houver
    if (!this.userForm.valid) {
      console.log('Erros no userForm:', this.userForm.errors);
    }
    if (!this.statusFormGroup.valid) {
      console.log('Erros no statusFormGroup:', this.statusFormGroup.errors);
    }
    if (!this.tipoFormGroup.valid) {
      console.log('Erros no tipoFormGroup:', this.tipoFormGroup.errors);
    }
  }


}

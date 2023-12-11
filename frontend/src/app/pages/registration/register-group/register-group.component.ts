import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,

} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from "@angular/material/button";
import { Observable } from 'rxjs';
import { PeriodicElementGroup } from '../../../models/periodic-element-group.model';
import { GroupService } from '../../../service/group.service';
import { SharedModule } from '../../../shared/shared.module';


@Component({
  selector: 'app-register-group',
  standalone: true,
  imports: [CommonModule,
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
  templateUrl: './register-group.component.html',
  styleUrl: './register-group.component.css',
  providers: [PeriodicElementGroup, GroupService]
})
export class RegisterGroupComponent {
  registerGroup$ = new Observable<PeriodicElementGroup[]>();

  groupForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private registerGroup: PeriodicElementGroup,
    private groupService: GroupService) {

    this.groupForm = this._formBuilder.group({
      descriptionGroup: ['', Validators.required],
    });
  }

  saveGroupClick() {
    console.log('createGroupClick foi chamado');

    if (this.groupForm.valid) {
      const newGroup: PeriodicElementGroup = {
        ...this.groupForm.value,
      };
      console.log(newGroup);

      this.groupService.createGroup(newGroup)
        .subscribe({
          next: (response) => {
            console.log(response);
            this.groupForm.reset();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            console.log('Operação concluída');
          }
        });
    }

    if (!this.groupForm.valid) {
      console.log('Erros no groupForm:', this.groupForm.errors);
    }
  }

}

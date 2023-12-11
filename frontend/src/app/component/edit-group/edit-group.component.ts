import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { GroupService } from '../../service/group.service';
import { PeriodicElementGroup } from '../../models/periodic-element-group.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-edit-group',
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
    SharedModule],
  templateUrl: './edit-group.component.html',
  styleUrl: './edit-group.component.css',
  providers: [PeriodicElementGroup, GroupService]
})
export class EditGroupComponent {
  groupForm: FormGroup;

  group!: PeriodicElementGroup;

  constructor(private _formBuilder: FormBuilder,
    private registerGroup: PeriodicElementGroup,
    private groupService: GroupService,
    public dialogRef: MatDialogRef<EditGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {


    // Inicializa o formulário
    this.groupForm = this._formBuilder.group({
      idGroup: ['', Validators.required],
      descriptionGroup: ['', Validators.required],
    });


    // Preenche o formulário com os dados do grupo, se disponíveis
    if (this.data?.group) {
      this.groupForm.patchValue(this.data.group);
      this.group = this.data.group;
    }

    this.groupForm.get("idGroup")?.disable();
  }

  editGroupClick() {
    console.log('editGroupClick foi chamado');

    if (this.groupForm.valid) {
      const groupToUpdate: PeriodicElementGroup = {
        ...this.groupForm.value,
      };
      console.log(groupToUpdate);

      // Suponha que você tenha o idGroup disponível aqui
      const idGroup = this.group.idGroup;

      this.groupService.editGroup(idGroup,
        {
          idGroup: idGroup,
          descriptionGroup: groupToUpdate.descriptionGroup
        })
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

  onCancelClick(): void {
    this.dialogRef.close(this.groupForm.value);
  }

 
}

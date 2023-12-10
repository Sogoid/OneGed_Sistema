import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditUserComponent } from '../../../component/edit-user/edit-user.component';
import { PeriodicElementUser } from '../../../models/periodic-element-user.model';
import { Observable, catchError, throwError } from 'rxjs';
import { UserService } from '../../../service/user.service';
import { SharedModule } from '../../../shared/shared.module';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatIconModule,
    SharedModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  providers: [UserService]
})

export class UserListComponent {

  userList$ = new Observable<PeriodicElementUser[]>();
  dataToDisplay: PeriodicElementUser[] = [];
  dataSource = new MatTableDataSource(this.dataToDisplay);

  constructor(public dialog: MatDialog, private userService: UserService) {
    this.obterUser();
  }

  obterUser() {
    this.userService.obterUser().pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })

    ).subscribe(data => {
      console.log('Dados recebidos do servidor:', data);

      this.dataToDisplay = data;
      console.log('Dados para exibir:', this.dataToDisplay);
      this.dataSource = new MatTableDataSource(this.dataToDisplay);
      console.log('DataSource:', this.dataSource);
    });
  }

  displayedColumns: string[] = ['idUser', 'status', 'type', 'nameUser', 'email', 'edit', 'delete'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  removeData(idUser: number) {
    const index = this.dataToDisplay.findIndex(element => element.id === idUser);
    if (index !== -1) {
      this.dataToDisplay.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.dataToDisplay);
    }
  }
}

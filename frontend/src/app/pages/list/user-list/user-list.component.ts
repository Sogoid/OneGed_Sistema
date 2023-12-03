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
    MatIconModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent {

  displayedColumns: string[] = ['position', 'status', 'type', 'name', 'email', 'edit', 'delete'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataToDisplay: PeriodicElement[] = [...ELEMENT_DATA];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(EditUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  removeData(position: number) {
    const index = this.dataToDisplay.findIndex(element => element.position === position);
    if (index !== -1) {
      this.dataToDisplay.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.dataToDisplay);
    }
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  status: boolean;
  type: boolean;
  email: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, status: false, type: true, name: 'Hydrogen', email: "1.0079" },

];

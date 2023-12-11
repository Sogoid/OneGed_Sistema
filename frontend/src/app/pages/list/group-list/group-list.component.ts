import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditGroupComponent } from '../../../component/edit-group/edit-group.component';
import { PeriodicElementGroup } from '../../../models/periodic-element-group.model';
import { Observable, catchError, throwError } from 'rxjs';
import { GroupService } from '../../../service/group.service';
import { SharedModule } from '../../../shared/shared.module';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-group-list',
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
  templateUrl: './group-list.component.html',
  styleUrl: './group-list.component.css',
  providers: [GroupService]
})
export class GroupListComponent {

  groupList$new = new Observable<PeriodicElementGroup[]>();
  dataToDisplay: PeriodicElementGroup[] = [];
  dataSource = new MatTableDataSource(this.dataToDisplay);

  constructor(public dialog: MatDialog, private groupService: GroupService) {
    this.obterGroup();
  }
  obterGroup() {
    this.groupService.obterGroup().pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    ).subscribe(data => {
      console.log("Dados recebidos do servidor", data);

      this.dataToDisplay = data;
      console.log("Dados para exibir", this, this.dataToDisplay);
      this.dataSource = new MatTableDataSource(this.dataToDisplay);
      console.log("DataSource:", this.dataSource);
    })
  }

  displayedColumns: string[] = ["idGroup", "descriptionGroup", 'edit', 'delete'];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog(idGroup: number) {
    this.groupService.obterGroupById(idGroup).subscribe(group => {
      const dialogRef = this.dialog.open(EditGroupComponent, {
        data: { group: group },
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    });
  }

  removeData(idGroup: number) {
    const index = this.dataToDisplay.findIndex(element => element.idGroup === idGroup);
    if (index !== -1) {
      this.dataToDisplay.splice(index, 1);
      this.dataSource = new MatTableDataSource(this.dataToDisplay);
    }
  }
}

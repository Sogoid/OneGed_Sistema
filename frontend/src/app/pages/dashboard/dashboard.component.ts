import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuSideNavComponent } from '../../component/menu-side-nav/menu-side-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { FileListComponent } from '../list/file-list/file-list.component';
import { UserListComponent } from '../list/user-list/user-list.component';
import { UploadFileComponent } from '../upload-file/upload-file.component';
import { RegisterUserComponent } from '../registration/register-user/register-user.component';
import { RegisterGroupComponent } from '../registration/register-group/register-group.component';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MenuSideNavComponent,
    MatIconModule,
    RegisterUserComponent,
    RegisterGroupComponent,
    FileListComponent,
    UserListComponent,
    UploadFileComponent,
    MatButtonModule,
    RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

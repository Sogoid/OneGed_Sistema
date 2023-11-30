import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserListComponent } from './pages/list/user-list/user-list.component';
import { FileListComponent } from './pages/list/file-list/file-list.component';
import { UploadFileComponent } from './pages/upload-file/upload-file.component';
import { RegisterUserComponent } from './registration/register-user/register-user.component';
import { RegisterGroupComponent } from './registration/register-group/register-group.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    outlet: "primary",
    title: "Login"
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    outlet: "primary",
    title: "Dashboard",
    children: [
      {
        path: "home",
        component: HomeComponent,
        outlet: "main",
        title: "Home Page"
      },
      {
        path: "cadastro-usuario",
        component: RegisterUserComponent,
        outlet: "main",
        title: "Cadastro de usuário"
      },
      {
        path: "cadastro-grupo",
        component: RegisterGroupComponent,
        outlet: "main",
        title: "Cadastro de grupo"
      },
      {
        path: "user-list",
        component: UserListComponent,
        outlet: "main",
        title: "Lista de Usuário"
      },
      {
        path: "file-list",
        component: FileListComponent,
        outlet: "main",
        title: "Lista de Documentos"
      },
      {
        path: "upload-file",
        component: UploadFileComponent,
        outlet: "main",
        title: "Upload de Documentos"
      }
    ]
  },
];

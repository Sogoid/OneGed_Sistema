import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    title: "Login"
  },
  {
    path: "home",
    component: HomeComponent,
    title: "Home Page"
  }

];

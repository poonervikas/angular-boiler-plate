import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserLandingPageComponent } from './components/user/user-landing-page/user-landing-page.component';
import { AdminLandingPageComponent } from './components/admin/admin-landing-page/admin-landing-page.component';
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { UserGuardGuard } from './guards/user-guard.guard';



const routes: Routes = [
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user',
    component: UserLandingPageComponent,
    canActivate: [UserGuardGuard]
  },
  {
    path: 'admin',
    component: AdminLandingPageComponent,
    canActivate: [AdminGuardGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

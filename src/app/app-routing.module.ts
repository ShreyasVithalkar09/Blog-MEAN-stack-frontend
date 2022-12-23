import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogsComponent } from './blog/blogs/blogs.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';
import { AddpostComponent } from './dashboard/addpost/addpost.component';
import { EditpostComponent } from './dashboard/editpost/editpost.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: BlogsComponent },
  { path: 'posts/:id', component: BlogDetailComponent },
  {
    path: 'dashboard/addpost',
    component: AddpostComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'dashboard/editpost/:id',
    component: EditpostComponent,
    // data: { id: localStorage.getItem('id') },
    // canActivate: [AuthGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '' },

  // { path: 'logout', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

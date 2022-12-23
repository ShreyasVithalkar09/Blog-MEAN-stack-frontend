import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { BlogsComponent } from './blog/blogs/blogs.component';
import { BlogComponent } from './blog/blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddpostComponent } from './dashboard/addpost/addpost.component';
import { EditpostComponent } from './dashboard/editpost/editpost.component';
import { ModalComponent } from './dashboard/modal/modal.component';
import { TokeninterceptorService } from './auth/tokeninterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BlogsComponent,
    BlogComponent,
    BlogDetailComponent,
    DashboardComponent,
    AddpostComponent,
    EditpostComponent,
    ModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokeninterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

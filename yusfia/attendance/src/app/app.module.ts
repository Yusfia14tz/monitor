import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ngmaterial } from './Ngmaterial';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AttendanceComponent } from './attendance/attendance.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AttendanceFormComponent } from './attendance-form/attendance-form.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PasswordComponent } from './password/password.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    AttendanceComponent,
    AttendanceFormComponent,
    MainDashboardComponent,
    LoginComponent,
    RegisterComponent,
    SuccessDialogComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ngmaterial,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    RouterModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

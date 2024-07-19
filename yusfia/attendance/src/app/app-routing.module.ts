import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceComponent } from './attendance/attendance.component';
import { AttendanceFormComponent } from './attendance-form/attendance-form.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PasswordComponent } from './password/password.component';

const routes: Routes = [
  {path: "", component: MainDashboardComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:"attendance2", component: AttendanceFormComponent},

  { path:"password", component:PasswordComponent},
  {path: "attendance", component: AttendanceComponent,children:
    [{path:"attendance2", component: AttendanceFormComponent},
      
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

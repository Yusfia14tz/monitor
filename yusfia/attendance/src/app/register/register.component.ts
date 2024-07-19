import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';

  constructor(private http: HttpClient, private router: Router, public dialog: MatDialog) {}

  register() {
    if (this.password !== this.repeatPassword) {
      alert('Passwords do not match!');
      return;
    }

    const user = { name: this.name, email: this.email, password: this.password };
    this.http.post('http://localhost:8080/api/users/register', user)
      .subscribe(response => {
        console.log('User registered:', response);
        this.showSuccessDialog();
      }, error => {
        console.error('Error registering user:', error);
      });
  }

  showSuccessDialog(): void {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '250px',
      data: { message: 'Registration successful! Please log in.' }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.router.navigate(['/']);
    });
  }

  login() {
    // Navigate to login page
    this.router.navigate(['/']);
  }
}

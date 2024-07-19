import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
onSubmit(arg0: any) {
throw new Error('Method not implemented.');
}
username: any;
loginForm: any;
forgotPassword() {
throw new Error('Method not implemented.');
}
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor(private http: HttpClient, private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit() {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail && savedPassword) {
      this.email = savedEmail;
      this.password = savedPassword;
      this.rememberMe = true;
    }
  }

  login() {
    const loginRequest = { email: this.email, password: this.password };
    this.http.post('http://localhost:8080/api/users/login', loginRequest)
      .subscribe(response => {
        console.log('User logged in:', response);

        if (this.rememberMe) {
          localStorage.setItem('email', this.email);
          localStorage.setItem('password', this.password);
        } else {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
        }

        this.snackBar.open('Login successful!', 'Close', { duration: 3000 });
        this.router.navigate(['/dashboard']);
      }, error => {
        console.error('Error logging in:', error);
        this.snackBar.open('Invalid email or password', 'Close', { duration: 3000 });
      });
  }

  register() {
    // Navigate to registration page
    this.router.navigate(['/register']);
  }
}

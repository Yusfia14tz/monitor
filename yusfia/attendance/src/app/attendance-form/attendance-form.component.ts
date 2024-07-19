import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-attendance-form',
  templateUrl: './attendance-form.component.html',
  styleUrl: './attendance-form.component.css'
})
export class AttendanceFormComponent {
  attendanceDate: string = '';
  clockIn: string = '';
  clockOut: string = '';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  submitAttendance() {
    const attendanceData = {
      date: this.attendanceDate,
      clockIn: this.clockIn,
      clockOut: this.clockOut
    };

    this.http.post<any>('http://localhost:8080/api/attendance', attendanceData)
      .subscribe(response => {
        console.log('Attendance submitted:', response);
        this.snackBar.open('Attendance submitted successfully!', 'Close', { duration: 3000 });
      }, error => {
        console.error('Error submitting attendance:', error);
        this.snackBar.open('Failed to submit attendance', 'Close', { duration: 3000 });
      });
  }
}
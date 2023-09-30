import {ChangeDetectorRef, Component} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {interval} from "rxjs";
import {AttendanceService} from "../../service/attendance.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  isAlive: boolean = false;
  isFunctionRunning:boolean = false;
  uploading:boolean = false;

  constructor(private cookieService: CookieService,
              private router: Router,
              private authService: AuthService,
              private cdr: ChangeDetectorRef,
              private attendanceService: AttendanceService) {
  }

  logout() {
    this.cookieService.delete('user-token');
    this.router.navigate(['/auth']);
  }

  async handleCheckboxChange() {
    if (this.isFunctionRunning) {
      return; // Function is already running, do not proceed
    }

    this.isFunctionRunning = true;

    const user = this.authService.getUser();

    try {
      if (this.isAlive) {
        await this.startAttendance(user);
      } else {
        await this.stopAttendance();
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.isFunctionRunning = false;
    }
  }

  private async startAttendance(user: any) {
    this.uploading = true;
    const response = await this.attendanceService.startAttendance(user).toPromise();
    if (response.data.status === 200) {
      this.isAlive = false;
      this.attendanceService.stopAttendance().subscribe(
        (response) => {
          console.log('Attendance stopped:', response);
        }
      )
    }
    this.uploading = false;
  }

  private async stopAttendance() {
    const response = await this.attendanceService.stopAttendance().toPromise();
    console.log('Attendance stopped:', response);
  }

}

import {Component} from '@angular/core';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private cookieService: CookieService,
              private router: Router) {
  }

  logout() {
    this.cookieService.delete('user-token');
    this.router.navigate(['/auth']);
  }
}

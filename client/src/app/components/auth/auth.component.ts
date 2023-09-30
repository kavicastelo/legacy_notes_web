import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  hide = true;
  uploading = false;

  loginForm = new FormGroup({
    user: new FormControl(null,[
      Validators.required
    ]),
    password: new FormControl(null,[
      Validators.required
    ])
  })

  constructor(private userService:UserService,
              private cookieService:AuthService,
              private route:Router,
              private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    if(this.cookieService.isExists()){
      this.route.navigate(['/dashboard']);
    }
  }

  login() {
    this.uploading = true;
    this.userService.login(
      this.loginForm.get('user')?.value,
      this.loginForm.get('password')?.value
    ).subscribe(response=>{
      this.openSnackBar('Login Success!','OK')
      this.cookieService.createUser(response.data.token);
      this.route.navigateByUrl('/dashboard');
    },error => {
      this.openSnackBar('Login Failed! try again!','OK')
      console.log(error);
    })
    this.uploading = false;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}

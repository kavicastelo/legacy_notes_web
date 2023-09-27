import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  hide = true;

  signUpForm = new FormGroup({
    user: new FormControl(null,[
      Validators.required
    ]),
    password: new FormControl(null,[
      Validators.required
    ]),
    email: new FormControl(null,[
      Validators.required
    ]),
    believer: new FormControl(null,[
      Validators.required
    ])
  })

  constructor(private userService:UserService,
              private cookieService:AuthService,
              private route:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    if(this.cookieService.isExists()){
      this.route.navigate(['/dashboard']);
    }
  }

  create() {
    this.userService.signup(
      this.signUpForm.get('user')?.value,
      this.signUpForm.get('password')?.value,
      this.signUpForm.get('email')?.value,
      this.signUpForm.get('believer')?.value
    ).subscribe(response=>{
      this.openSnackBar('Signup Successfully!','OK');
      this.cookieService.createUser(response.data.token);
      this.route.navigateByUrl('/dashboard');
    },error => {
      this.openSnackBar('Somethings wrong! try again!','OK');
      console.log(error);
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}

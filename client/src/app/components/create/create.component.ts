import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  hide = true;

  loginForm = new FormGroup({
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

  constructor() {
  }

  ngOnInit(): void {
  }

  create() {
  }
}

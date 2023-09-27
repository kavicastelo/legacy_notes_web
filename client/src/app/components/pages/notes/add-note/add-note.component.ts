import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent {

  hide = true;

  addForm = new FormGroup({
    title: new FormControl(null,[
      Validators.required
    ]),
    note: new FormControl(null,[
      Validators.required
    ])
  })

  add() {

  }

}

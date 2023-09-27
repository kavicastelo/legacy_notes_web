import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NotesService} from "../../../../service/notes.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  addForm = new FormGroup({
    title: new FormControl(null,[
      Validators.required
    ]),
    note: new FormControl(null,[
      Validators.required
    ])
  })

  constructor(private notesService:NotesService,
              private router:Router,
              private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  add() {
    this.notesService.saveNote({
      title:this.addForm.get('title')?.value,
      content:this.addForm.get('note')?.value}
    ).subscribe(response=>{
      this.addForm.reset();
      this.openSnackBar('Note Saved!','OK');
    },error => {
      console.log(error);
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action,{duration:2000});
  }

}

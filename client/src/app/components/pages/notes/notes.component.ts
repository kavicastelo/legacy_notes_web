import {Component, OnInit} from '@angular/core';
import {NotesService} from "../../../service/notes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  lock:boolean = true;

  notes:any;

  constructor(private notesService: NotesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes() {
    this.notesService.getNotes().subscribe(
      response => {
        this.notes = response.data.data;
      }, error => {
        console.log(error);
      }
    )
  }

  unlock() {
    let inputVal = (<HTMLInputElement>document.getElementById('password')).value.toLowerCase();
    const password = 'i have permission to access this folder!';
    if (inputVal === password) {
      this.lock = false;
    }
    else {
      alert('Wrong password! You\'re not the person who belongs to this folder!');
      // @ts-ignore
      document.getElementById('password').value = '';
    }
  }

}

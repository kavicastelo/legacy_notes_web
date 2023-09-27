import {Component, OnInit} from '@angular/core';
import {NotesService} from "../../../../service/notes.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.scss']
})
export class ViewNoteComponent implements OnInit {

  title:any;
  date:any;
  note:any;

  constructor(private notesService: NotesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadNote();
  }

  loadNote() {
    this.notesService.getNote(this.router.url.split('/')[2]).subscribe(
      response => {
        this.title = response.data.data.title;
        this.date = response.data.data.date.split('T')[0];
        const paragraphs = response.data.data.content.split('\n');
        this.note = paragraphs.map((paragraph: any) => `<p>${paragraph}</p>`).join('');
      }, error => {
        console.log(error);
      }
    )
  }
}

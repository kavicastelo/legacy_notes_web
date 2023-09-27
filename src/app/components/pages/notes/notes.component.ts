import { Component } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent {

  lock:boolean = true;

  notes = [
    { id: 1, title: 'Note 1', content: 'This is the content of Note 1.' },
    { id: 2, title: 'Note 2', content: 'This is the content of Note 2.' },
    { id: 3, title: 'Note 3', content: 'This is the content of Note 3.' },
    { id: 4, title: 'Note 4', content: 'This is the content of Note 4.' },
    { id: 5, title: 'Note 5', content: 'This is the content of Note 5.' },
    { id: 6, title: 'Note 6', content: 'This is the content of Note 6.' },
    // Add more mock notes here
  ];


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

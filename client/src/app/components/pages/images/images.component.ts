import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {

  downloadURL: Observable<string>;

  constructor(private storage: AngularFireStorage) {
    const ref = this.storage.ref('gs://legacy-notes.appspot.com/1.jpg');
    this.downloadURL = ref.getDownloadURL();
  }

}

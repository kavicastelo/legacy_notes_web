import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private fireStorage: AngularFireStorage) {
  }

  listAllImagesInFolder(folderName: any): Observable<any> {
    const storageRef = this.fireStorage.ref(folderName);
    return storageRef.listAll();
  }

}

import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent {

  constructor(private fireStorage:AngularFireStorage){}

  async onFileChange(event:any){
    const file = event.target.files[0]
    if(file){
      const path = `private/${file.name}`
      const uploadTask =await this.fireStorage.upload(path,file)
      const url = await uploadTask.ref.getDownloadURL()
      console.log(url)
    }
  }

}

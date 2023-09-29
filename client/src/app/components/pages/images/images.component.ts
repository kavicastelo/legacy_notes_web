import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ImagesService} from "../../../service/images.service";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit{

  images: string[] = [];
  uploading = false;
  lock:boolean = true;

  constructor(private fireStorage:AngularFireStorage, private imageService:ImagesService){}

  ngOnInit(): void {
    this.retrieveImages().then(r => {
      console.log("All Images are retrieved")
    }).catch(err=>{
      console.log(err)
    });
  }

  async onFileChange(event:any){
    this.uploading = true;
    const file = event.target.files[0]
    if(file){
      const path = `private/${file.name}`
      const uploadTask =await this.fireStorage.upload(path,file)
      const url = await uploadTask.ref.getDownloadURL();
    }
    this.uploading = false;
  }

  async retrieveImages() {
    await this.imageService.listAllImagesInFolder('private').subscribe((result:any) => {
      result.items.forEach((item: { getDownloadURL: () => Promise<string>; }) => {
        item.getDownloadURL().then((url: string) => {
          this.images.push(url);
        });
      });
    });
  }

  openImage(url:any) {
    window.open(url);
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

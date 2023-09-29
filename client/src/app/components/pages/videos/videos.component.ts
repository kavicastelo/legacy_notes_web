import { Component } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {ImagesService} from "../../../service/images.service";

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent {

  images: string[] = [];
  uploading = false;
  lock:boolean = true;

  constructor(private fireStorage:AngularFireStorage, private imageService:ImagesService){}

  ngOnInit(): void {
    this.retrieveImages().then(r => {
      console.log("All Videos are retrieved")
    }).catch(err=>{
      console.log(err)
    });
  }

  async onFileChange(event:any){
    this.uploading = true;
    const file = event.target.files[0]
    if(file){
      const path = `videos/${file.name}`
      const uploadTask =await this.fireStorage.upload(path,file)
      const url = await uploadTask.ref.getDownloadURL();
    }
    this.uploading = false;
  }

  async retrieveImages() {
    await this.imageService.listAllImagesInFolder('videos').subscribe((result:any) => {
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

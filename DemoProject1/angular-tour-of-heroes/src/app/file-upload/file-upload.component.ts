import { Component, Input, OnInit } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  fileToUpload: File | null;
  constructor(private fielUploadService:FileUploadService) {
    this.fileToUpload = null;
  }

  ngOnInit(): void {
  }

  
  handleFileInput(event:Event) {
    const files = (<HTMLInputElement>event.target).files;

    if(files!=null){
      this.fileToUpload = files[0]
    }
    
  }
  

  uploadFileToActivity() {
    if(this.fileToUpload!=null){
      this.fielUploadService.postFile(this.fileToUpload).subscribe(data =>{})
    }
  }


}

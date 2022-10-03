import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'writer.FormDataContentType()' })
  };

  constructor(private http: HttpClient) { }

  
  postFile(fileToUpload:File): Observable<string> {
    const endpoint = "http://127.0.0.1:8001/file_upload/";
    const formData: FormData = new FormData();
    formData.append("file", fileToUpload, fileToUpload.name);
    return this.http.post(endpoint, formData, {responseType: 'text'})
    .pipe(
      tap( // Log the result or error
      {
        next: (data) => this.log(data),
        error: (error) => this.log(error)
      }
    ))
  }

  private log(message: string) {
    console.info(message)
  }
  
}

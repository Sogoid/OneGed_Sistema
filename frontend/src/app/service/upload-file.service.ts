import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  uploadFile(file: File): Observable<number> {
    return new Observable((observer: Subscriber<number>) => {
      const formData = new FormData();
      formData.append('file', file);

      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/api/upload');

      xhr.onload = () => {
        if (xhr.status === 200) {
          observer.next(100);
        } else {
          observer.next(0);
        }
        observer.complete();
      };

      xhr.upload.onprogress = (event: ProgressEvent) => {
        if (event.lengthComputable) {
          const progress = Math.min(100, 100.0 * event.loaded / event.total);
          observer.next(progress);
        }
      };

      xhr.send(formData);
    });
  }
}

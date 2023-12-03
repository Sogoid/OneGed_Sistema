import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from "@angular/material/button";
import { UploadFileService } from '../../service/upload-file.service';



@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [CommonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.css'
})

export class UploadFileComponent {

  file: File | null = null;
  progress: number = 0;

  constructor(private uploadService: UploadFileService) { }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    this.file = target?.files?.[0] || null;
  }

  uploadFile() {
    if (!this.file) {
      return;
    }

    this.uploadService.uploadFile(this.file).subscribe(progress => {
      this.progress = progress;
    });
  }


}

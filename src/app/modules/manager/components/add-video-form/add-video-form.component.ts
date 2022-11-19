import { Router } from '@angular/router';
import { NewVideo } from './../../../../core/models/video.model';
import { Observable, of } from 'rxjs';
import { VideoService } from './../../../../core/api-services/video.service';
import { CategoryService } from './../../../../core/api-services/category.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Category } from 'src/app/core/models/category.model';

@Component({
  selector: 'app-add-video-form',
  templateUrl: './add-video-form.component.html',
  styleUrls: ['./add-video-form.component.scss'],
})
export class AddVideoFormComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];

  categories$: Observable<Category[]> = of([]);

  addVideoForm: FormGroup = {} as FormGroup;
  castFormFieldEntries: string[] = [];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly categoryService: CategoryService,
    private readonly videoService: VideoService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();

    this.addVideoForm = this.formBuilder.group({
      cast: [[], Validators.required],
      title: ['', Validators.required],
      synopsis: ['', Validators.required],
      director: ['', Validators.required],
      category: ['', Validators.required],
      poster: ['', Validators.required],
      streamURL: ['', Validators.required],
    });

    this.castFormFieldEntries = this.addVideoForm.value.cast;
  }

  removeCastNameChip(castName: string): void {
    const index = this.castFormFieldEntries.indexOf(castName);

    if (index >= 0) {
      this.castFormFieldEntries.splice(index, 1);
    }
  }

  addCastNameChip(event: MatChipInputEvent): void {
    const castName = (event.value || '').trim();

    if (castName) {
      this.castFormFieldEntries.push(castName);
    }

    event.chipInput!.clear();
  }

  addVideo() {
    const form = this.addVideoForm.value;

    if (this.addVideoForm.valid) {
      let video: NewVideo = {
        cast: this.castFormFieldEntries,
        title: form.title,
        synopsis: form.synopsis,
        director: form.director,
        category: form.category,
        poster: form.poster,
        streamURL: form.streamURL,
      };

      this.videoService.addVideo(video).subscribe({
        next: () => this.router.navigateByUrl('/manager'),
        error: (err) => alert(err.message),
      });
    }
  }
}

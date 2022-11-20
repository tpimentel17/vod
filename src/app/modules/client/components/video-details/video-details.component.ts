import { takeUntil } from 'rxjs/operators';
import { Category } from './../../../../core/models/category.model';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/core/api-services/video.service';
import { Observable, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/core/models/video.model';
import { CategoryService } from 'src/app/core/api-services/category.service';
import { BaseComponent } from 'src/app/modules/shared/components/base/base.component';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export class VideoDetailsComponent extends BaseComponent implements OnInit {
  //TODO Apagar quando a Api funcionar

  // video: Video = {
  //   _id: 'dsadsada',
  //   cast: ['Antonio Bandeiras', 'Jean Claude Vac Ban'],
  //   rate: [2, 3, 5],
  //   title: 'The Incredibles',
  //   synopsis:
  //     'While trying to lead a quiet suburban life, a family of undercover superheroes are forced into action to save the world.',
  //   director: 'Brad Bird',
  //   category: 'dsadsad',
  //   poster: 'https://m.media-amazon.com/images/I/71kod5t-q9L._AC_SY879_.jpg',
  //   streamURL: 'https://www.youtube.com/embed/-UaGUdNJdRQ',
  // };

  //video$: Observable<Video> = of(this.video);
  //-----------------------------------------------------

  video$: Observable<Video> = of({} as Video);
  categories: Category[] = [];
  rateValues: number[] = [1, 2, 3, 4, 5];
  selectedRate: number = 3;

  videoId: string | null = '';

  constructor(
    private readonly videoService: VideoService,
    private readonly categoryService: CategoryService,
    private readonly activeRoute: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    this.videoId = this.activeRoute.snapshot.paramMap.get('id');

    if (this.videoId) {
      this.categoryService
        .getAllCategories()
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe({
          next: (categories) => (this.categories = categories),
          error: (err) => alert(err.message),
        });

      this.video$ = this.videoService.getVideoById(this.videoId);
    }
  }

  getCategory(id: string): string {
    const category = this.categories.find((category) => category._id === id);
    return category ? category.name : 'Category Unavailable';
  }

  calculateRating(rateValues: number[]) {
    const sum = rateValues.reduce((a, b) => a + b, 0);
    const average = sum / rateValues.length || 0;

    return Math.round((average + Number.EPSILON) * 100) / 100;
  }

  openVideo(videoUrl: string) {
    window.open(videoUrl);
  }

  submitRating() {
    if (this.videoId) {
      this.videoService
        .addVideoRating(this.videoId, this.selectedRate)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe({
          next: (video) => (this.video$ = of(video)),
          error: (err) => alert(err.message),
        });
    }
  }
}

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VideoService } from 'src/app/core/api-services/video.service';
import { Video } from 'src/app/core/models/video.model';

@Component({
  selector: 'app-client-video-list',
  templateUrl: './client-video-list.component.html',
  styleUrls: ['./client-video-list.component.scss'],
})
export class ClientVideoListComponent implements OnInit {
  videoCatalogue$: Observable<Video[]> = of([]);
  searchTerm: string = '';

  constructor(
    private readonly videoService: VideoService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.videoCatalogue$ = this.videoService.getAllVideos();
  }

  navigateToDetails(id: string): void {
    this.router.navigateByUrl('/client/' + id);
  }
}

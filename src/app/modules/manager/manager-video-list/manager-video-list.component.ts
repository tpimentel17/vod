import { Observable, of } from 'rxjs';
import { Video } from '../../../core/models/video.model';
import { VideoService } from '../../../core/api-services/video.service';
import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../shared/components/base/base.component';

@Component({
  selector: 'app-manager-video-list',
  templateUrl: './manager-video-list.component.html',
  styleUrls: ['./manager-video-list.component.scss'],
})
export class ManagerVideoListComponent extends BaseComponent implements OnInit {
  constructor(private readonly videoService: VideoService) {
    super();
  }

  videoCatalogue$: Observable<Video[]> = of([]);

  ngOnInit(): void {
    this.videoCatalogue$ = this.videoService.getAllVideos();
  }

  remove(id: string) {
    this.videoService.deleteVideo(id).subscribe();
    this.videoCatalogue$ = this.videoService.getAllVideos();
  }
}

import { Video } from './../models/video.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private baseUrl = 'https://vodmasterdata.herokuapp.com/api/video/';

  constructor(private readonly http: HttpClient) {}

  getAllVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.baseUrl);
  }

  deleteVideo(videoId: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + videoId);
  }
}

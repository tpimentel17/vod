import { NewVideo, Video } from './../models/video.model';
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

  getVideoById(videoId: string): Observable<Video> {
    return this.http.get<Video>(this.baseUrl + videoId);
  }

  deleteVideo(videoId: string): Observable<any> {
    return this.http.delete<any>(this.baseUrl + videoId);
  }

  addVideo(video: NewVideo): Observable<any> {
    return this.http.post<any>(this.baseUrl, video);
  }

  addVideoRating(videoId: string, rate: number): Observable<Video> {
    return this.http.put<Video>(`${this.baseUrl}${videoId}/rate`, {
      rate: rate,
    });
  }
}

import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '../models/video.model';

@Pipe({
  name: 'searchVideo',
})
export class SearchVideoPipe implements PipeTransform {
  transform(videos: Video[] | null, serachTerm: string): Video[] {
    if (!videos) {
      return [];
    }
    if (!serachTerm) {
      return videos;
    }
    serachTerm = serachTerm.toLocaleLowerCase();

    return videos.filter((video) => {
      return video.title.toLocaleLowerCase().includes(serachTerm);
    });
  }
}

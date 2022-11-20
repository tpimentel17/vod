import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientHomeComponent } from './components/client-home/client-home.component';
import { ClientVideoListComponent } from './components/client-video-list/client-video-list.component';
import { SharedModule } from '../shared/shared.module';
import { VideoDetailsComponent } from './components/video-details/video-details.component';

@NgModule({
  declarations: [ClientHomeComponent, ClientVideoListComponent, VideoDetailsComponent],
  imports: [SharedModule],
})
export class ClientModule {}

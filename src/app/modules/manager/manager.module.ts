import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ManagerVideoListComponent } from './manager-video-list/manager-video-list.component';
import { ManagerHomeComponent } from './components/manager-home/manager-home.component';

@NgModule({
  declarations: [ManagerVideoListComponent, ManagerHomeComponent],
  imports: [SharedModule],
})
export class ManagerModule {}

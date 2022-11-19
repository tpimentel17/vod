import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { ManagerVideoListComponent } from './manager-video-list/manager-video-list.component';
import { ManagerHomeComponent } from './components/manager-home/manager-home.component';

import { AddVideoFormComponent } from './components/add-video-form/add-video-form.component';

@NgModule({
  declarations: [
    ManagerVideoListComponent,
    ManagerHomeComponent,
    AddVideoFormComponent,
  ],
  imports: [SharedModule],
})
export class ManagerModule {}

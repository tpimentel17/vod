import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerVideoListComponent } from './manager-video-list.component';

describe('ManagerVideoListComponent', () => {
  let component: ManagerVideoListComponent;
  let fixture: ComponentFixture<ManagerVideoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerVideoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

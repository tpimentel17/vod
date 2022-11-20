import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientVideoListComponent } from './client-video-list.component';

describe('ClientVideoListComponent', () => {
  let component: ClientVideoListComponent;
  let fixture: ComponentFixture<ClientVideoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientVideoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientVideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

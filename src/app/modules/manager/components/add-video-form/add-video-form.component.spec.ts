import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVideoFormComponent } from './add-video-form.component';

describe('AddVideoFormComponent', () => {
  let component: AddVideoFormComponent;
  let fixture: ComponentFixture<AddVideoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVideoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVideoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

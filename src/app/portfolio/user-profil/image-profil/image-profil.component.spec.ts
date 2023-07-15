import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProfilComponent } from './image-profil.component';

describe('ImageProfilComponent', () => {
  let component: ImageProfilComponent;
  let fixture: ComponentFixture<ImageProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageProfilComponent]
    });
    fixture = TestBed.createComponent(ImageProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

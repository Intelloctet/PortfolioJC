import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactsComponent } from './user-contacts.component';

describe('UserContactsComponent', () => {
  let component: UserContactsComponent;
  let fixture: ComponentFixture<UserContactsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserContactsComponent]
    });
    fixture = TestBed.createComponent(UserContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

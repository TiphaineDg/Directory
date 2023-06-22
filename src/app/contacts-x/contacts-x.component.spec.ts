import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsXComponent } from './contacts-x.component';

describe('ContactsXComponent', () => {
  let component: ContactsXComponent;
  let fixture: ComponentFixture<ContactsXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsXComponent]
    });
    fixture = TestBed.createComponent(ContactsXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

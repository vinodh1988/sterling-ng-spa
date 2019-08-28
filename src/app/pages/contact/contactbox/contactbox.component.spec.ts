import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactboxComponent } from './contactbox.component';

describe('ContactboxComponent', () => {
  let component: ContactboxComponent;
  let fixture: ComponentFixture<ContactboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

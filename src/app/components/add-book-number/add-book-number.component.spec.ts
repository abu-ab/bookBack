import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookNumberComponent } from './add-book-number.component';

describe('AddBookNumberComponent', () => {
  let component: AddBookNumberComponent;
  let fixture: ComponentFixture<AddBookNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

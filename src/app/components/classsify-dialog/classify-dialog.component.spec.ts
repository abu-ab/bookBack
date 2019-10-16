import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasssifyDialogComponent } from './classify-dialog.component';

describe('ClasssifyDialogComponent', () => {
  let component: ClasssifyDialogComponent;
  let fixture: ComponentFixture<ClasssifyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClasssifyDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasssifyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

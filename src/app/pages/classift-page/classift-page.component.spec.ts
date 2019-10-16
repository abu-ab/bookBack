import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassiftPageComponent } from './classift-page.component';

describe('ClassiftPageComponent', () => {
  let component: ClassiftPageComponent;
  let fixture: ComponentFixture<ClassiftPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassiftPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassiftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackpostComponent } from './stackpost.component';

describe('StackpostComponent', () => {
  let component: StackpostComponent;
  let fixture: ComponentFixture<StackpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

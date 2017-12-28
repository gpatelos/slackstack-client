import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackpostDetailComponent } from './stackpost-detail.component';

describe('StackpostDetailComponent', () => {
  let component: StackpostDetailComponent;
  let fixture: ComponentFixture<StackpostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackpostDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackpostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

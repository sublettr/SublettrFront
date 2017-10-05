import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubleaseComponent } from './view-sublease.component';

describe('ViewSubleaseComponent', () => {
  let component: ViewSubleaseComponent;
  let fixture: ComponentFixture<ViewSubleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

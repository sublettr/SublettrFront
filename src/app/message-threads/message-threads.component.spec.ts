import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageThreadsComponent } from './message-threads.component';

describe('MessageThreadsComponent', () => {
  let component: MessageThreadsComponent;
  let fixture: ComponentFixture<MessageThreadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageThreadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

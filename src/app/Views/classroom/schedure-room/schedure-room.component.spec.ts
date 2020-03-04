import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedureRoomComponent } from './schedure-room.component';

describe('SchedureRoomComponent', () => {
  let component: SchedureRoomComponent;
  let fixture: ComponentFixture<SchedureRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedureRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedureRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

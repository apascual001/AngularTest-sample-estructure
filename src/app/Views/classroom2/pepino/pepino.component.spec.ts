import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PepinoComponent } from './pepino.component';

describe('PepinoComponent', () => {
  let component: PepinoComponent;
  let fixture: ComponentFixture<PepinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PepinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PepinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

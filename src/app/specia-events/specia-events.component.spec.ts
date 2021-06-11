import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciaEventsComponent } from './specia-events.component';

describe('SpeciaEventsComponent', () => {
  let component: SpeciaEventsComponent;
  let fixture: ComponentFixture<SpeciaEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeciaEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciaEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

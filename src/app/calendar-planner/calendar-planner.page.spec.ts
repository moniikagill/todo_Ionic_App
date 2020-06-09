import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarPlannerPage } from './calendar-planner.page';

describe('CalendarPlannerPage', () => {
  let component: CalendarPlannerPage;
  let fixture: ComponentFixture<CalendarPlannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarPlannerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarPlannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

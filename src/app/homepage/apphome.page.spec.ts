import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApphomePage } from './apphome.page';

describe('ApphomePage', () => {
  let component: ApphomePage;
  let fixture: ComponentFixture<ApphomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApphomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApphomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

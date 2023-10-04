import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTask3Component } from './info-task3.component';

describe('InfoTask3Component', () => {
  let component: InfoTask3Component;
  let fixture: ComponentFixture<InfoTask3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoTask3Component]
    });
    fixture = TestBed.createComponent(InfoTask3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

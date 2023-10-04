import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsTask3Component } from './buttons-task3.component';

describe('ButtonsTask3Component', () => {
  let component: ButtonsTask3Component;
  let fixture: ComponentFixture<ButtonsTask3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsTask3Component]
    });
    fixture = TestBed.createComponent(ButtonsTask3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

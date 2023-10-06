import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsTransportComponent } from './buttons-transport.component';

describe('ButtonsTransportComponent', () => {
  let component: ButtonsTransportComponent;
  let fixture: ComponentFixture<ButtonsTransportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsTransportComponent]
    });
    fixture = TestBed.createComponent(ButtonsTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

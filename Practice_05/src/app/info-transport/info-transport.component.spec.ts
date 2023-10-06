import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoTransportComponent } from './info-transport.component';

describe('InfoTransportComponent', () => {
  let component: InfoTransportComponent;
  let fixture: ComponentFixture<InfoTransportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoTransportComponent]
    });
    fixture = TestBed.createComponent(InfoTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

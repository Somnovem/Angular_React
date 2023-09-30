import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamletMonologueComponent } from './hamlet-monologue.component';

describe('HamletMonologueComponent', () => {
  let component: HamletMonologueComponent;
  let fixture: ComponentFixture<HamletMonologueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HamletMonologueComponent]
    });
    fixture = TestBed.createComponent(HamletMonologueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

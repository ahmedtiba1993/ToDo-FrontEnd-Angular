/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OublieMdpComponent } from './oublieMdp.component';

describe('OublieMdpComponent', () => {
  let component: OublieMdpComponent;
  let fixture: ComponentFixture<OublieMdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OublieMdpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OublieMdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

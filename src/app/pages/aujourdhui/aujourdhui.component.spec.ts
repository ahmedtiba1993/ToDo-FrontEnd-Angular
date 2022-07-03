/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AujourdhuiComponent } from './aujourdhui.component';

describe('AujourdhuiComponent', () => {
  let component: AujourdhuiComponent;
  let fixture: ComponentFixture<AujourdhuiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AujourdhuiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AujourdhuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CorbeilleComponent } from './corbeille.component';

describe('CorbeilleComponent', () => {
  let component: CorbeilleComponent;
  let fixture: ComponentFixture<CorbeilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorbeilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorbeilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

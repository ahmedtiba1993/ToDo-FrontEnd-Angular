/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToutComponent } from './tout.component';

describe('ToutComponent', () => {
  let component: ToutComponent;
  let fixture: ComponentFixture<ToutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

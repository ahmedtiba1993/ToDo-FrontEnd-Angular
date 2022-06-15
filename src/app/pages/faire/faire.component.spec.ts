/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaireComponent } from './faire.component';

describe('FaireComponent', () => {
  let component: FaireComponent;
  let fixture: ComponentFixture<FaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

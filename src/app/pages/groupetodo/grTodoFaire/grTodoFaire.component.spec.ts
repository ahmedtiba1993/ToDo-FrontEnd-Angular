/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrTodoFaireComponent } from './grTodoFaire.component';

describe('GrTodoFaireComponent', () => {
  let component: GrTodoFaireComponent;
  let fixture: ComponentFixture<GrTodoFaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrTodoFaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrTodoFaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

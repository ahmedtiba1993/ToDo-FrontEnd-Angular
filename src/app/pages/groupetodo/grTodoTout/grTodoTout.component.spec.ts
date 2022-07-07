/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrTodoToutComponent } from './grTodoTout.component';

describe('GrTodoToutComponent', () => {
  let component: GrTodoToutComponent;
  let fixture: ComponentFixture<GrTodoToutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrTodoToutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrTodoToutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

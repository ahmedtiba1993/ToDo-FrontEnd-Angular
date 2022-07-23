/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodoModifierComponent } from './todoModifier.component';

describe('TodoModifierComponent', () => {
  let component: TodoModifierComponent;
  let fixture: ComponentFixture<TodoModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

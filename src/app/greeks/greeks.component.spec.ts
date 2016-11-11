/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GreeksComponent } from './greeks.component';

describe('GreeksComponent', () => {
  let component: GreeksComponent;
  let fixture: ComponentFixture<GreeksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreeksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GaulsComponent } from './gauls.component';

describe('GaulsComponent', () => {
  let component: GaulsComponent;
  let fixture: ComponentFixture<GaulsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaulsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaulsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RomansComponent } from './romans.component';

describe('RomansComponent', () => {
  let component: RomansComponent;
  let fixture: ComponentFixture<RomansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

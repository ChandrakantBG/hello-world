import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Custompipe2Component } from './custompipe2.component';

describe('Custompipe2Component', () => {
  let component: Custompipe2Component;
  let fixture: ComponentFixture<Custompipe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Custompipe2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Custompipe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

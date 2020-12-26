import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbackgroundComponent } from './fbackground.component';

describe('FbackgroundComponent', () => {
  let component: FbackgroundComponent;
  let fixture: ComponentFixture<FbackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

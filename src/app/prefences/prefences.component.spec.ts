import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefencesComponent } from './prefences.component';

describe('PrefencesComponent', () => {
  let component: PrefencesComponent;
  let fixture: ComponentFixture<PrefencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrefencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

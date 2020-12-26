import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroUpdateComponent } from './astro-update.component';

describe('AstroUpdateComponent', () => {
  let component: AstroUpdateComponent;
  let fixture: ComponentFixture<AstroUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstroUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstroUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

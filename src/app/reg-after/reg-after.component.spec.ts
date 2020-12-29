import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegAfterComponent } from './reg-after.component';

describe('RegAfterComponent', () => {
  let component: RegAfterComponent;
  let fixture: ComponentFixture<RegAfterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegAfterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

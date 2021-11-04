import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftVerticalBarComponent } from './left-vertical-bar.component';

describe('LeftVerticalBarComponent', () => {
  let component: LeftVerticalBarComponent;
  let fixture: ComponentFixture<LeftVerticalBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftVerticalBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftVerticalBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

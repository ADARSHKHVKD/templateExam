import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reform } from './reform';

describe('Reform', () => {
  let component: Reform;
  let fixture: ComponentFixture<Reform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

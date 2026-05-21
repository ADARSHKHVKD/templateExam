import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hooksexample } from './hooksexample';

describe('Hooksexample', () => {
  let component: Hooksexample;
  let fixture: ComponentFixture<Hooksexample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hooksexample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hooksexample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

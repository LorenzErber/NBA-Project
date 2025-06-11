import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homesite } from './homesite';

describe('Homesite', () => {
  let component: Homesite;
  let fixture: ComponentFixture<Homesite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homesite]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homesite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

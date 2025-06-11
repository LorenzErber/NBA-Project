import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playerdetails } from './playerdetails';

describe('Playerdetails', () => {
  let component: Playerdetails;
  let fixture: ComponentFixture<Playerdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Playerdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Playerdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

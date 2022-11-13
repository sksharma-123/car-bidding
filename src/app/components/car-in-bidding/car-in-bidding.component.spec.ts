import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInBiddingComponent } from './car-in-bidding.component';

describe('CarInBiddingComponent', () => {
  let component: CarInBiddingComponent;
  let fixture: ComponentFixture<CarInBiddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarInBiddingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarInBiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

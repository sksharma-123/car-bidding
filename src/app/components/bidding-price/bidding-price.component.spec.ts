import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingPriceComponent } from './bidding-price.component';

describe('BiddingPriceComponent', () => {
  let component: BiddingPriceComponent;
  let fixture: ComponentFixture<BiddingPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiddingPriceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiddingPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

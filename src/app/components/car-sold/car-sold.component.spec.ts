import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSoldComponent } from './car-sold.component';

describe('CarSoldComponent', () => {
  let component: CarSoldComponent;
  let fixture: ComponentFixture<CarSoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSoldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

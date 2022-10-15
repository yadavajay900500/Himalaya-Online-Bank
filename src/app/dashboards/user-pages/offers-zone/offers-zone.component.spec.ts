import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersZoneComponent } from './offers-zone.component';

describe('OffersZoneComponent', () => {
  let component: OffersZoneComponent;
  let fixture: ComponentFixture<OffersZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersZoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

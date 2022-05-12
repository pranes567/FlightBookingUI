import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicountcouponComponent } from './dicountcoupon.component';

describe('DicountcouponComponent', () => {
  let component: DicountcouponComponent;
  let fixture: ComponentFixture<DicountcouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicountcouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DicountcouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

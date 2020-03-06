import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfMarketComponentComponent } from './ff-market-component.component';

describe('FfMarketComponentComponent', () => {
  let component: FfMarketComponentComponent;
  let fixture: ComponentFixture<FfMarketComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfMarketComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfMarketComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

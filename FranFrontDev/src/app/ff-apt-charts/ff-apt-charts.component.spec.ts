import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfAptChartsComponent } from './ff-apt-charts.component';

describe('FfAptChartsComponent', () => {
  let component: FfAptChartsComponent;
  let fixture: ComponentFixture<FfAptChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfAptChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfAptChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

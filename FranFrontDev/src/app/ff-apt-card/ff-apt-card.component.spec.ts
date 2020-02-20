import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfAptCardComponent } from './ff-apt-card.component';

describe('FfAptCardComponent', () => {
  let component: FfAptCardComponent;
  let fixture: ComponentFixture<FfAptCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfAptCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfAptCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

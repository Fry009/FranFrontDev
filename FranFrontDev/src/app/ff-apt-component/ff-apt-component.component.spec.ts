import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfAptComponentComponent } from './ff-apt-component.component';

describe('FfAptComponentComponent', () => {
  let component: FfAptComponentComponent;
  let fixture: ComponentFixture<FfAptComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfAptComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfAptComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

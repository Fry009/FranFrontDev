import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfIntroComponent } from './ff-intro.component';

describe('FfIntroComponent', () => {
  let component: FfIntroComponent;
  let fixture: ComponentFixture<FfIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

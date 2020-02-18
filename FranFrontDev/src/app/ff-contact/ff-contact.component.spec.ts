import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfContactComponent } from './ff-contact.component';

describe('FfContactComponent', () => {
  let component: FfContactComponent;
  let fixture: ComponentFixture<FfContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

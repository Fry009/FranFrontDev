import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfMyProjectsComponent } from './ff-my-projects.component';

describe('FfMyProjectsComponent', () => {
  let component: FfMyProjectsComponent;
  let fixture: ComponentFixture<FfMyProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfMyProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfMyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

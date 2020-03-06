import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FfPokeEngineComponent } from './ff-poke-engine.component';

describe('FfPokeEngineComponent', () => {
  let component: FfPokeEngineComponent;
  let fixture: ComponentFixture<FfPokeEngineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FfPokeEngineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FfPokeEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

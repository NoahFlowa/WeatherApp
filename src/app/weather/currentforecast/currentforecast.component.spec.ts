import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentforecastComponent } from './currentforecast.component';

describe('CurrentforecastComponent', () => {
  let component: CurrentforecastComponent;
  let fixture: ComponentFixture<CurrentforecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentforecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

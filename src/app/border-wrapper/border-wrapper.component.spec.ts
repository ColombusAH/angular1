import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderWrapperComponent } from './border-wrapper.component';

describe('BorderWrapperComponent', () => {
  let component: BorderWrapperComponent;
  let fixture: ComponentFixture<BorderWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorderWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCv } from './display-cv';

describe('DisplayCv', () => {
  let component: DisplayCv;
  let fixture: ComponentFixture<DisplayCv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayCv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

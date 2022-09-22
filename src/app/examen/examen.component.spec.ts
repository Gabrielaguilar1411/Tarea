import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EXAMENComponent } from './examen.component';

describe('EXAMENComponent', () => {
  let component: EXAMENComponent;
  let fixture: ComponentFixture<EXAMENComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EXAMENComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EXAMENComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductoresComponent } from './conductores.component';

describe('ConductoresComponent', () => {
  let component: ConductoresComponent;
  let fixture: ComponentFixture<ConductoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConductoresComponent]
    });
    fixture = TestBed.createComponent(ConductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

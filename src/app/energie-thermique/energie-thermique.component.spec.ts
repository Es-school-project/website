import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergieThermiqueComponent } from './energie-thermique.component';

describe('EnergieThermiqueComponent', () => {
  let component: EnergieThermiqueComponent;
  let fixture: ComponentFixture<EnergieThermiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergieThermiqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergieThermiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

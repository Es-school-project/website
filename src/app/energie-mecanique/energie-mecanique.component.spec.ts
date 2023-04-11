import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergieMecaniqueComponent } from './energie-mecanique.component';

describe('EnergieMecaniqueComponent', () => {
  let component: EnergieMecaniqueComponent;
  let fixture: ComponentFixture<EnergieMecaniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergieMecaniqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergieMecaniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

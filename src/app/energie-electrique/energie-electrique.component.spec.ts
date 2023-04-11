import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergieElectriqueComponent } from './energie-electrique.component';

describe('EnergieElectriqueComponent', () => {
  let component: EnergieElectriqueComponent;
  let fixture: ComponentFixture<EnergieElectriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergieElectriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergieElectriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

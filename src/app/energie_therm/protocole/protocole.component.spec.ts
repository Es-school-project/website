import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocleComponent } from './protocole.component';

describe('ProtocleComponent', () => {
  let component: ProtocleComponent;
  let fixture: ComponentFixture<ProtocleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtocleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtocleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosAgregarComponent } from './generos-agregar.component';

describe('GenerosAgregarComponent', () => {
  let component: GenerosAgregarComponent;
  let fixture: ComponentFixture<GenerosAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerosAgregarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerosAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

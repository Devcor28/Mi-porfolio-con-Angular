import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloYDescripcionPrincipalComponent } from './titulo-y-descripcion-principal.component';

describe('TituloYDescripcionPrincipalComponent', () => {
  let component: TituloYDescripcionPrincipalComponent;
  let fixture: ComponentFixture<TituloYDescripcionPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TituloYDescripcionPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloYDescripcionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

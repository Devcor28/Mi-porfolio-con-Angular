import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloqueDescripcion2Component } from './bloque-descripcion2.component';

describe('BloqueDescripcion2Component', () => {
  let component: BloqueDescripcion2Component;
  let fixture: ComponentFixture<BloqueDescripcion2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloqueDescripcion2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloqueDescripcion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

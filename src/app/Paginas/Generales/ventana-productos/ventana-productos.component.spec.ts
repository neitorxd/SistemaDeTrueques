import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaProductosComponent } from './ventana-productos.component';

describe('VentanaProductosComponent', () => {
  let component: VentanaProductosComponent;
  let fixture: ComponentFixture<VentanaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentanaProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentanaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

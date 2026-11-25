import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidosVendedorPage } from './pedidos-vendedor.page';

describe('PedidosVendedorPage', () => {
  let component: PedidosVendedorPage;
  let fixture: ComponentFixture<PedidosVendedorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuVendedorPage } from './menu-vendedor.page';

describe('MenuVendedorPage', () => {
  let component: MenuVendedorPage;
  let fixture: ComponentFixture<MenuVendedorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

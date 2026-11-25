import type { Routes } from '@angular/router';
import { USUARIO } from './data/comidas';

// Aquí se registran las páginas. El comando "npx ionic g page ..." agrega cada una solo.
export const routes: Routes = [
  // Al abrir la app: si ya tiene cuenta va directo al menú, si no a bienvenida
  {
    path: '',
    redirectTo: () => (USUARIO.registrado ? (USUARIO.vendedor ? 'pedidos-vendedor' : 'home') : 'bienvenida'),
    pathMatch: 'full',
  },

  // ===== Sin registrarse (solo ver el menú) =====
  {
    path: 'bienvenida',
    loadComponent: () => import('./pages/bienvenida/bienvenida.page').then((m) => m.BienvenidaPage),
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
  },

  // ===== Cliente =====
  {
    path: 'registro',
    loadComponent: () => import('./pages/cliente/registro/registro.page').then((m) => m.RegistroPage),
  },
  {
    path: 'carrito',
    loadComponent: () => import('./pages/cliente/carrito/carrito.page').then((m) => m.CarritoPage),
  },
  {
    path: 'pedido',
    loadComponent: () => import('./pages/cliente/pedido/pedido.page').then((m) => m.PedidoPage),
  },

  // ===== Vendedor =====
  {
    path: 'pedidos-vendedor',
    loadComponent: () =>
      import('./pages/vendedor/pedidos-vendedor/pedidos-vendedor.page').then((m) => m.PedidosVendedorPage),
  },
  {
    path: 'menu-vendedor',
    loadComponent: () => import('./pages/vendedor/menu-vendedor/menu-vendedor.page').then((m) => m.MenuVendedorPage),
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/cliente/perfil/perfil.page').then((m) => m.PerfilPage),
  },
  {
    path: 'historial',
    loadComponent: () => import('./pages/cliente/historial/historial.page').then((m) => m.HistorialPage),
  },
];

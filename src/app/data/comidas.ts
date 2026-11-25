export interface Comida {
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
}

// Dirección de nuestra API (Beeceptor)
export const API = 'https://sazon-al-toque.free.beeceptor.com';

// Lista de comidas: empieza vacía y se llena con lo que regresa la API
export const COMIDAS: Comida[] = [];

// Pide las comidas a la API (GET /comidas) y las guarda en COMIDAS.
// Si ya se cargaron no vuelve a pedirlas.
export async function cargarComidas(): Promise<void> {
  if (COMIDAS.length > 0) return;
  const respuesta = await fetch(API + '/comidas');
  const datos: Comida[] = await respuesta.json();
  COMIDAS.push(...datos);
}

// ================================================================
// Datos que COMPARTEN las páginas.
// Como son variables exportadas, todas las páginas que las importan
// ven lo mismo (duran mientras la app esté abierta).
// ================================================================

// Lo que el cliente va agregando para comprar
export const CARRITO: Comida[] = [];

// Datos del usuario. "registrado" dice si ya creó su cuenta
// y "vendedor" si también vende (un cliente puede volverse vendedor).
export const USUARIO = {
  registrado: false,
  vendedor: false,
  nombre: '',
  correo: '',
  telefono: '',
  direccion: '',
};

// Forma de un pedido
export interface Pedido {
  numero: number; // 1, 2, 3...
  fecha: string; // día y hora en que se pidió
  cliente: string;
  direccion: string;
  productos: Comida[];
  total: number;
  estado: string; // 'Preparando' | 'En camino' | 'Entregado'
}

// Todos los pedidos hechos (el vendedor los ve aquí)
export const PEDIDOS: Pedido[] = [];


// ================================================================
// Guardar en el teléfono (localStorage) para que no se pierda
// al cerrar la app o apagar el celular.
// ================================================================

// Guarda la cuenta, el carrito y los pedidos
export function guardar() {
  localStorage.setItem('usuario', JSON.stringify(USUARIO));
  localStorage.setItem('carrito', JSON.stringify(CARRITO));
  localStorage.setItem('pedidos', JSON.stringify(PEDIDOS));
}

// Al abrir la app recuperamos lo que estaba guardado
Object.assign(USUARIO, JSON.parse(localStorage.getItem('usuario') || '{}'));
CARRITO.push(...JSON.parse(localStorage.getItem('carrito') || '[]'));
PEDIDOS.push(...JSON.parse(localStorage.getItem('pedidos') || '[]'));

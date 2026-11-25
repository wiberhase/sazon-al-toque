export interface Comida {
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
}

export const COMIDAS: Comida[] = [
  // 🍔 Hamburguesas
  { nombre: 'Hamburguesa clásica', categoria: 'Hamburguesas', descripcion: 'Carne de res, lechuga, jitomate y cebolla', precio: 85 },
  { nombre: 'Hamburguesa con queso', categoria: 'Hamburguesas', descripcion: 'Carne de res con queso amarillo derretido', precio: 95 },
  { nombre: 'Hamburguesa doble', categoria: 'Hamburguesas', descripcion: 'Doble carne, doble queso y tocino', precio: 130 },
  { nombre: 'Hamburguesa hawaiana', categoria: 'Hamburguesas', descripcion: 'Carne, piña asada, jamón y queso', precio: 110 },
  { nombre: 'Hamburguesa de pollo', categoria: 'Hamburguesas', descripcion: 'Pechuga empanizada con mayonesa de chipotle', precio: 100 },
  { nombre: 'Hamburguesa clásica', categoria: 'Hamburguesas', descripcion: 'Carne de res, lechuga, jitomate y cebolla', precio: 85 },
  { nombre: 'Hamburguesa con queso', categoria: 'Hamburguesas', descripcion: 'Carne de res con queso amarillo derretido', precio: 95 },
  { nombre: 'Hamburguesa doble', categoria: 'Hamburguesas', descripcion: 'Doble carne, doble queso y tocino', precio: 130 },
  { nombre: 'Hamburguesa hawaiana', categoria: 'Hamburguesas', descripcion: 'Carne, piña asada, jamón y queso', precio: 110 },
  { nombre: 'Hamburguesa de pollo', categoria: 'Hamburguesas', descripcion: 'Pechuga empanizada con mayonesa de chipotle', precio: 100 },

  // 🌮 Tacos
  { nombre: 'Tacos al pastor', categoria: 'Tacos', descripcion: 'Orden de 5 con piña, cebolla y cilantro', precio: 75 },
  { nombre: 'Tacos de asada', categoria: 'Tacos', descripcion: 'Orden de 5 de bistec asado', precio: 85 },
  { nombre: 'Tacos de suadero', categoria: 'Tacos', descripcion: 'Orden de 5 con salsa verde', precio: 75 },
  { nombre: 'Tacos de birria', categoria: 'Tacos', descripcion: 'Orden de 4 con consomé', precio: 95 },
  { nombre: 'Tacos de pescado', categoria: 'Tacos', descripcion: 'Orden de 3 estilo Baja con col y crema', precio: 90 },

  // 🍕 Pizzas
  { nombre: 'Pizza de pepperoni', categoria: 'Pizzas', descripcion: 'Mediana con extra queso', precio: 160 },
  { nombre: 'Pizza hawaiana', categoria: 'Pizzas', descripcion: 'Mediana con jamón y piña', precio: 165 },
  { nombre: 'Pizza mexicana', categoria: 'Pizzas', descripcion: 'Chorizo, jalapeño, cebolla y frijoles', precio: 175 },
  { nombre: 'Pizza cuatro quesos', categoria: 'Pizzas', descripcion: 'Mozzarella, cheddar, parmesano y gouda', precio: 180 },

  // 🌭 Antojitos
  { nombre: 'Quesadillas', categoria: 'Antojitos', descripcion: 'Orden de 3, de queso o con guisado', precio: 70 },
  { nombre: 'Enchiladas verdes', categoria: 'Antojitos', descripcion: 'De pollo con crema y queso', precio: 95 },
  { nombre: 'Chilaquiles', categoria: 'Antojitos', descripcion: 'Rojos o verdes, con pollo o huevo', precio: 90 },
  { nombre: 'Tortas de milanesa', categoria: 'Antojitos', descripcion: 'Con aguacate, frijoles y jalapeño', precio: 85 },
  { nombre: 'Hot dog', categoria: 'Antojitos', descripcion: 'Con tocino, cebolla y jitomate', precio: 50 },

  // 🍗 Pollo
  { nombre: 'Pollo frito', categoria: 'Pollo', descripcion: '4 piezas crujientes', precio: 120 },
  { nombre: 'Alitas BBQ', categoria: 'Pollo', descripcion: '10 piezas con salsa BBQ', precio: 135 },
  { nombre: 'Alitas búfalo', categoria: 'Pollo', descripcion: '10 piezas picantes con aderezo ranch', precio: 135 },

  // 🍣 Sushi
  { nombre: 'Sushi California', categoria: 'Sushi', descripcion: 'Surimi, aguacate y pepino', precio: 110 },
  { nombre: 'Sushi empanizado', categoria: 'Sushi', descripcion: 'Relleno de queso crema y camarón', precio: 125 },

  // 🍟 Complementos
  { nombre: 'Papas fritas', categoria: 'Complementos', descripcion: 'Porción mediana', precio: 45 },
  { nombre: 'Aros de cebolla', categoria: 'Complementos', descripcion: 'Porción con aderezo', precio: 50 },

  // 🥤 Bebidas
  { nombre: 'Refresco', categoria: 'Bebidas', descripcion: 'Lata de 355 ml', precio: 25 },
  { nombre: 'Agua de horchata', categoria: 'Bebidas', descripcion: 'Vaso de 1 litro', precio: 35 },
  { nombre: 'Agua de jamaica', categoria: 'Bebidas', descripcion: 'Vaso de 1 litro', precio: 35 },
];

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

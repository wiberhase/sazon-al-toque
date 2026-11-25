import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton,
  IonSearchbar, IonList, IonItem, IonLabel, IonNote, IonFooter, IonThumbnail, IonIcon,
} from '@ionic/angular';
// Iconos: se importan por nombre y se registran con addIcons
import { addIcons } from 'ionicons';
import { cartOutline, personCircleOutline, storefrontOutline, add } from 'ionicons/icons';
// Datos: lista de comidas, carrito y cliente (compartidos)
import { COMIDAS, CARRITO, USUARIO, Comida } from '../../data/comidas';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule, FormsModule, RouterLink,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton,
    IonSearchbar, IonList, IonItem, IonLabel, IonNote, IonFooter, IonThumbnail, IonIcon,
  ],
})
export class HomePage {
  private router = inject(Router); // para cambiar de página desde el código

  constructor() {
    // Registramos los iconos que usa el HTML
    addIcons({ cartOutline, personCircleOutline, storefrontOutline, add });
  }

  items: Comida[] = COMIDAS; // todas las comidas
  carrito: Comida[] = CARRITO; // lo que el cliente agrega
  cliente = USUARIO; // datos del cliente (registrado o no)
  busqueda: string = ''; // texto del buscador
  limite: number = 5; // cuántas comidas se ven a la vez

  // Una foto por categoría (están en src/assets/img)
  imagenes: { [categoria: string]: string } = {
    Hamburguesas: 'assets/img/hamburguesa.jpg',
    Tacos: 'assets/img/tacos.jpg',
    Pizzas: 'assets/img/pizza.jpg',
    Antojitos: 'assets/img/antojitos.jpg',
    Pollo: 'assets/img/pollo.jpg',
    Sushi: 'assets/img/sushi.jpg',
    Complementos: 'assets/img/papas.jpg',
    Bebidas: 'assets/img/bebidas.jpg',
  };

  // Comidas que coinciden con la búsqueda (por nombre o categoría).
  // Si el buscador está vacío regresa todas.
  get filteredItems(): Comida[] {
    const texto = this.busqueda.toLowerCase().trim();
    return this.items.filter(
      (item) => item.nombre.toLowerCase().includes(texto) || item.categoria.toLowerCase().includes(texto)
    );
  }

  // Solo las primeras "limite" comidas
  get visibles(): Comida[] {
    return this.filteredItems.slice(0, this.limite);
  }

  // Muestra 5 más
  verMas() {
    this.limite += 5;
  }

  // Al escribir algo nuevo volvemos a mostrar 5
  reiniciarLimite() {
    this.limite = 5;
  }

  // Al tocar una categoría la ponemos en el buscador
  buscarCategoria(categoria: string) {
    this.busqueda = categoria;
    this.limite = 5;
  }

  // Agregar al carrito: si no está registrado lo mandamos a registrarse
  agregar(item: Comida) {
    if (!this.cliente.registrado) {
      this.router.navigate(['/registro']);
      return;
    }
    this.carrito.push(item);
  }

  // Suma de precios del carrito
  total(): number {
    let suma = 0;
    for (const item of this.carrito) {
      suma += item.precio;
    }
    return suma;
  }
}

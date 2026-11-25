import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton,
  IonInput, IonSelect, IonSelectOption, IonList, IonItem, IonLabel, IonIcon,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';
import { COMIDAS, Comida } from '../../../data/comidas';

@Component({
  selector: 'app-menu-vendedor',
  templateUrl: './menu-vendedor.page.html',
  styleUrls: ['./menu-vendedor.page.scss'],
  imports: [
    CommonModule, FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton,
    IonInput, IonSelect, IonSelectOption, IonList, IonItem, IonLabel, IonIcon,
  ],
})
export class MenuVendedorPage {
  constructor() {
    addIcons({ trashOutline });
  }

  // La MISMA lista que ve el cliente en home
  comidas: Comida[] = COMIDAS;

  categorias: string[] = ['Hamburguesas', 'Tacos', 'Pizzas', 'Antojitos', 'Pollo', 'Sushi', 'Complementos', 'Bebidas'];

  // Variables del formulario
  nombre: string = '';
  descripcion: string = '';
  precio: number = 0;
  categoria: string = 'Hamburguesas';

  // Agrega el platillo al inicio de la lista
  agregar() {
    if (this.nombre === '' || this.precio <= 0) {
      return; // no agregamos si falta nombre o precio
    }

    this.comidas.unshift({
      nombre: this.nombre,
      descripcion: this.descripcion,
      precio: Number(this.precio),
      categoria: this.categoria,
    });

    // Limpiamos el formulario
    this.nombre = '';
    this.descripcion = '';
    this.precio = 0;
  }

  // Quita el platillo en la posición "i"
  quitar(i: number) {
    this.comidas.splice(i, 1);
  }
}

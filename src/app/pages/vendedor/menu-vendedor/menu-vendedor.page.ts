import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton,
  IonInput, IonSelect, IonSelectOption, IonList, IonItem, IonLabel, IonIcon,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';
import { COMIDAS, cargarComidas, Comida } from '../../../data/comidas';

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
export class MenuVendedorPage implements OnInit {
  private cd = inject(ChangeDetectorRef); // para refrescar la pantalla
  cargando: boolean = true; // true mientras llegan las comidas
  error: boolean = false; // true si la API no respondió

  // Al abrir la página pedimos las comidas a la API
  async ngOnInit() {
    try {
      await cargarComidas();
    } catch {
      this.error = true;
    }
    this.cargando = false;
    this.cd.markForCheck(); // avisamos a Angular que hay datos nuevos
  }

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

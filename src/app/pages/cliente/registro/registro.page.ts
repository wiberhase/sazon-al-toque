import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonInput, IonButton,
  IonSegment, IonSegmentButton, IonLabel, IonIcon,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { fastFoodOutline, storefrontOutline, logoGoogle } from 'ionicons/icons';
import { USUARIO } from '../../../data/comidas';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  imports: [
    CommonModule, FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonInput, IonButton,
    IonSegment, IonSegmentButton, IonLabel, IonIcon,
  ],
})
export class RegistroPage {
  private router = inject(Router);

  // Variables conectadas al HTML
  tipo: string = 'cliente'; // 'cliente' o 'vendedor'
  nombre: string = '';
  telefono: string = '';
  direccion: string = '';

  constructor() {
    addIcons({ fastFoodOutline, storefrontOutline, logoGoogle });
  }

  // Guarda los datos en USUARIO (lo ven las demás páginas)
  registrar() {
    USUARIO.nombre = this.nombre;
    USUARIO.telefono = this.telefono;
    USUARIO.direccion = this.direccion;
    USUARIO.vendedor = this.tipo === 'vendedor';
    USUARIO.registrado = true;

    // El vendedor va a sus pedidos; el cliente regresa al menú
    if (USUARIO.vendedor) {
      this.router.navigate(['/pedidos-vendedor']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  // Simulación de Google: ponemos datos de ejemplo y registramos.
  // (Un Google real necesita Firebase; aquí solo es para la práctica)
  entrarConGoogle() {
    this.nombre = 'Usuario Google';
    this.telefono = '5512345678';
    this.direccion = 'Av. Siempre Viva 123';
    this.registrar();
  }
}

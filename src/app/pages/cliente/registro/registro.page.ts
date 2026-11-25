import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonInput, IonButton,
  IonSegment, IonSegmentButton, IonLabel, IonIcon, IonList, IonItem, IonAvatar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { fastFoodOutline, storefrontOutline, logoGoogle, locationOutline } from 'ionicons/icons';
import { USUARIO, guardar } from '../../../data/comidas';
// Plugin de Capacitor para usar el GPS del celular
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  imports: [
    CommonModule, FormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonInput, IonButton,
    IonSegment, IonSegmentButton, IonLabel, IonIcon, IonList, IonItem, IonAvatar,
  ],
})
export class RegistroPage {
  private router = inject(Router);
  private cd = inject(ChangeDetectorRef); // para refrescar la pantalla

  // Variables conectadas al HTML
  tipo: string = 'cliente'; // 'cliente' o 'vendedor'
  nombre: string = '';
  telefono: string = '';
  direccion: string = '';
  correo: string = '';

  // Cuentas de Google de ejemplo (simulación)
  mostrarCuentas: boolean = false;
  cuentas = [
    { nombre: 'Francisco Torres', correo: 'francisco.torres@gmail.com' },
    { nombre: 'Carlos Pérez', correo: 'carlos.perez@gmail.com' },
    { nombre: 'Usuario Prueba', correo: 'prueba.sazon@gmail.com' },
  ];

  constructor() {
    addIcons({ fastFoodOutline, storefrontOutline, logoGoogle, locationOutline });
  }

  // Guarda los datos en USUARIO (lo ven las demás páginas)
  registrar() {
    USUARIO.nombre = this.nombre;
    USUARIO.telefono = this.telefono;
    USUARIO.direccion = this.direccion;
    USUARIO.vendedor = this.tipo === 'vendedor';
    USUARIO.correo = this.correo;
    USUARIO.registrado = true;
    guardar(); // queda guardado aunque se cierre la app

    // El vendedor va a sus pedidos; el cliente regresa al menú
    if (USUARIO.vendedor) {
      this.router.navigate(['/pedidos-vendedor']);
    } else {
      this.router.navigate(['/home']);
    }
  }

  // Usa el GPS para poner la ubicación en la dirección
  async usarUbicacion() {
    try {
      const pos = await Geolocation.getCurrentPosition({ enableHighAccuracy: true, timeout: 15000 });
      this.direccion = 'Ubicación: ' + pos.coords.latitude.toFixed(5) + ', ' + pos.coords.longitude.toFixed(5);
    } catch {
      this.direccion = 'No se pudo obtener la ubicación';
    }
    this.cd.markForCheck(); // mostramos el resultado en pantalla
  }

  // Simulación de Google: muestra la lista de cuentas
  entrarConGoogle() {
    this.mostrarCuentas = true;
  }

  // Al elegir una cuenta usamos su nombre y correo y registramos
  elegirCuenta(cuenta: { nombre: string; correo: string }) {
    this.nombre = cuenta.nombre;
    this.correo = cuenta.correo;
    this.telefono = this.telefono || '5512345678';
    this.direccion = this.direccion || 'Av. Siempre Viva 123';
    this.mostrarCuentas = false;
    this.registrar();
  }
}

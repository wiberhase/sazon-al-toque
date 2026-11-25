import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
  IonList, IonItem, IonLabel, IonButton, IonFooter, IonIcon,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trashOutline, personOutline, locationOutline, bicycleOutline } from 'ionicons/icons';
import { CARRITO, USUARIO, PEDIDOS, guardar } from '../../../data/comidas';
// Plugin de Capacitor para mandar notificaciones en el celular
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  imports: [
    CommonModule,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton,
    IonList, IonItem, IonLabel, IonButton, IonFooter, IonIcon,
  ],
})
export class CarritoPage {
  private router = inject(Router);

  constructor() {
    // Iconos que usa el HTML
    addIcons({ trashOutline, personOutline, locationOutline, bicycleOutline });
  }

  carrito = CARRITO; // productos agregados en home
  cliente = USUARIO; // nombre y dirección del registro
  envio: number = 30; // costo fijo de envío

  // Quita el producto que está en la posición "i"
  quitar(i: number) {
    this.carrito.splice(i, 1);
    guardar();
  }

  // Suma de productos + envío
  total(): number {
    let suma = 0;
    for (const item of this.carrito) {
      suma += item.precio;
    }
    return suma + this.envio;
  }

  // Crea el pedido, vacía el carrito y va a la pantalla del pedido
  confirmar() {
    PEDIDOS.push({
      numero: PEDIDOS.length + 1,
      fecha: new Date().toLocaleString(), // ej. 12/11/2026, 14:30:00
      cliente: this.cliente.nombre,
      direccion: this.cliente.direccion,
      productos: [...this.carrito], // copia de lo que había en el carrito
      total: this.total(),
      estado: 'Preparando',
    });

    this.avisar(PEDIDOS.length, this.total());
    this.carrito.length = 0; // vaciar el carrito
    guardar();
    this.router.navigate(['/pedido']);
  }

  // Manda una notificación al celular: "¡Pedido recibido!"
  async avisar(numero: number, total: number) {
    try {
      await LocalNotifications.requestPermissions(); // pide permiso la primera vez
      await LocalNotifications.schedule({
        notifications: [
          {
            id: numero,
            title: '¡Pedido recibido! 🍔',
            body: 'Tu pedido #' + numero + ' por $' + total + ' ya se está preparando.',
          },
        ],
      });
    } catch {
      // En el navegador puede fallar; no pasa nada
    }
  }
}

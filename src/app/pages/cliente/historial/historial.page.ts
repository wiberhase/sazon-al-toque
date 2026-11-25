import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonChip,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { receiptOutline } from 'ionicons/icons';
import { PEDIDOS, Pedido } from '../../../data/comidas';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
  imports: [
    CommonModule, RouterLink,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton, IonIcon, IonChip,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent,
  ],
})
export class HistorialPage {
  // Todos los pedidos hechos en el carrito
  pedidos: Pedido[] = PEDIDOS;

  constructor() {
    addIcons({ receiptOutline });
  }

  // Copia de la lista al revés para ver el pedido más nuevo primero
  get pedidosRecientes(): Pedido[] {
    return [...this.pedidos].reverse();
  }
}

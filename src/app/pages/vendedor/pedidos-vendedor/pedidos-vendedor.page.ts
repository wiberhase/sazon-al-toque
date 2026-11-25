import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton,
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { bicycleOutline, checkmarkDoneOutline, restaurantOutline } from 'ionicons/icons';
import { PEDIDOS, Pedido } from '../../../data/comidas';

@Component({
  selector: 'app-pedidos-vendedor',
  templateUrl: './pedidos-vendedor.page.html',
  styleUrls: ['./pedidos-vendedor.page.scss'],
  imports: [
    CommonModule, RouterLink,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonButton,
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon,
  ],
})
export class PedidosVendedorPage {
  constructor() {
    addIcons({ bicycleOutline, checkmarkDoneOutline, restaurantOutline });
  }

  // Los mismos pedidos que hace el cliente en el carrito
  pedidos: Pedido[] = PEDIDOS;

  // Cambia el estado; el cliente lo ve en su página "pedido"
  cambiarEstado(pedido: Pedido, estado: string) {
    pedido.estado = estado;
  }
}

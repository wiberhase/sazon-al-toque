import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonChip, IonList, IonItem, IonLabel, IonNote, IonButton, IonIcon,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { checkmarkCircle, timeOutline } from 'ionicons/icons';
import { PEDIDOS, Pedido } from '../../../data/comidas';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
  imports: [
    CommonModule, RouterLink,
    IonContent, IonHeader, IonTitle, IonToolbar, IonChip, IonList, IonItem, IonLabel, IonNote, IonButton, IonIcon,
  ],
})
export class PedidoPage {
  constructor() {
    addIcons({ checkmarkCircle, timeOutline });
  }

  // El último pedido de la lista (el que se acaba de hacer)
  get pedido(): Pedido | undefined {
    return PEDIDOS[PEDIDOS.length - 1];
  }
}

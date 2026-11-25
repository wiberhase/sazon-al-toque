import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonFooter, IonButton } from '@ionic/angular';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.page.html',
  styleUrls: ['./bienvenida.page.scss'],
  // Solo importamos lo que usa el HTML (RouterLink es para los botones que cambian de página)
  imports: [IonContent, IonFooter, IonButton, RouterLink],
})
export class BienvenidaPage {
  // Esta página no necesita lógica: los botones usan routerLink en el HTML
}

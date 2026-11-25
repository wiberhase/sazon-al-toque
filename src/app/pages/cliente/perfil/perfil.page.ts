import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonInput, IonButton, IonIcon,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { saveOutline, storefrontOutline, logOutOutline, receiptOutline } from 'ionicons/icons';
import { USUARIO } from '../../../data/comidas';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [
    CommonModule, FormsModule, RouterLink,
    IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton, IonInput, IonButton, IonIcon,
  ],
})
export class PerfilPage {
  private router = inject(Router);

  // Usamos el MISMO objeto USUARIO: lo que se edita aquí se ve en todas las páginas
  usuario = USUARIO;

  constructor() {
    addIcons({ saveOutline, storefrontOutline, logOutOutline, receiptOutline });
  }

  // El cliente ahora también es vendedor y va a su negocio
  hacermeVendedor() {
    this.usuario.vendedor = true;
    this.router.navigate(['/pedidos-vendedor']);
  }

  // Borra los datos y regresa a la bienvenida
  cerrarSesion() {
    this.usuario.registrado = false;
    this.usuario.vendedor = false;
    this.usuario.nombre = '';
    this.usuario.telefono = '';
    this.usuario.direccion = '';
    this.router.navigate(['/bienvenida']);
  }
}

import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  menu = [
    {
      titulo: 'Home',
      url: '/home',
      color: 'primary',
      icon: 'home-outline'
    },
    {
      titulo: 'Bienveida',
      url: '/bienvenida',
      color: 'primary',
      icon: 'home-outline'
    }
  ];
}

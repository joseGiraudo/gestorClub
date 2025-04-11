import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  imports: [MenubarModule, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  items: MenuItem[] | undefined;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/']
      },
      {
        label: 'Noticias',
        routerLink: ['/news']
      },
      {
        label: 'Deportes',
        items: [
          {
            label: 'Basquet',
            routerLink: ['/']
          },
          {
            label: 'Futbol',
            routerLink: ['/']
          },
          {
            label: 'Tenis',
            routerLink: ['/']
          }
        ]
      },
      {
        label: 'Asociate',
        routerLink: ['/']
      }
    ]
  }
  

}

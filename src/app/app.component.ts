import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MemberFormComponent } from './members/member-form/member-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, NavbarComponent, MemberFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestorClub';
}

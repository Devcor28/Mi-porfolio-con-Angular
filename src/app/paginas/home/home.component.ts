import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloYDescripcionPrincipalComponent } from '../../components/titulo-y-descripcion-principal/titulo-y-descripcion-principal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TituloYDescripcionPrincipalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  spanAside: string = 'Mis redes Sociales:'
}

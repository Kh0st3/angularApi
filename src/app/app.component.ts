import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaComentariosComponent } from './lista-comentarios/lista-comentarios.component';
import { ConsumoApiService } from './services/consumo-api.service';
import { EditarComentarioComponent } from './editar-comentario/editar-comentario.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaComentariosComponent, EditarComentarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'comentarioApp';

  comentarios: any[] = [];
  
  mostrarListaComentarios: boolean = false;

  mostrarComentarios() {
    this.mostrarListaComentarios = true;
  }
}

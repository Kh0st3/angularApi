import { Component } from '@angular/core';
import { ConsumoApiService } from '../services/consumo-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-comentarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-comentarios.component.html',
  styleUrl: './lista-comentarios.component.css'
})
export class ListaComentariosComponent {




  comentarios : any [] = [];

  constructor(private apiService:  ConsumoApiService) {}

  ngOnInit(): void {
    this.getComentarios();
  }

  getComentarios() : void{

    this.apiService.getListaComentarios()
    .subscribe(apiComentarios => this.comentarios = apiComentarios);


  }

}

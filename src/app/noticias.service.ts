import { Injectable } from '@angular/core';
import { Noticias } from './noticias/noticias.model';
import { ListaNoticias } from './noticias-mock';

@Injectable()
export class NoticiasService {

  constructor() { }

  getNoticias(): Noticias[] {
    return ListaNoticias;
  }

  getNoticia(id:number): Noticias{
    return ListaNoticias.find(noticia => noticia.id === id);
  
  }
}

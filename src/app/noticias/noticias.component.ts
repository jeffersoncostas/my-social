import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { Noticias } from './noticias.model';

import { SlideOutAnimation } from '../_animations/index';



@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  animations:[ SlideOutAnimation ],
  host: { '[@SlideOutAnimation]': '' }
})
export class NoticiasComponent {
  listaNoticias: Noticias[];

  constructor(private NoticiaService:NoticiasService) { }
  ngOnInit() {
    this.getListaNoticias();
  }
  
  getListaNoticias(){
    this.listaNoticias = this.NoticiaService.getNoticias();
  }
}

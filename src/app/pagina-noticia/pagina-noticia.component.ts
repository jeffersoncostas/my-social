import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../noticias.service';
import { Location } from '@angular/common';
import { Noticias } from '../noticias/noticias.model';
import { slideInOutAnimation } from '../_animations/index';

@Component({
  selector: 'app-pagina-noticia',
  templateUrl: './pagina-noticia.component.html',
  styleUrls: ['./pagina-noticia.component.css'],
  animations:[ slideInOutAnimation ],
  host: {'[@slideInOutAnimation]':''}
})
export class PaginaNoticiaComponent implements OnInit {
  noticiaAtual: Noticias

  constructor( private route: ActivatedRoute,
               private NoticiaService: NoticiasService, 
               private location: Location  ) { }

  ngOnInit() {
    this.getListaNoticias()
  }

  getListaNoticias(){
    const id = +this.route.snapshot.paramMap.get('id')
    this.noticiaAtual = this.NoticiaService.getNoticia(id);
  }
}

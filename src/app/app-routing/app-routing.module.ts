import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NoticiasComponent } from '../noticias/noticias.component';
import { PaginaNoticiaComponent } from '../pagina-noticia/pagina-noticia.component';

const routes: Routes = [
  {path:"", redirectTo:"/feed",pathMatch:"full"},
  {path:"feed", component: NoticiasComponent, data:{page:'feed'}},
  {path:"noticia/:id", component: PaginaNoticiaComponent, data:{page:'noticia'}  }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
  
})

export class AppRoutingModule { }



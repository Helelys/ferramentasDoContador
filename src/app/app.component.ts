import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PriceComponent } from "./components/price/price.component";
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { AboutConteudoComponent } from './components/about-conteudo/about-conteudo.component';
import { AboutHimComponent } from './components/about-him/about-him.component';
import { OfertaComponent } from "./components/oferta/oferta.component";
import { CompreComponent } from "./components/compre/compre.component";
import { AcordeonComponent } from "./components/acordeon/acordeon.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PriceComponent,
    HeroBannerComponent,
    AboutConteudoComponent,
    AboutHimComponent,
    OfertaComponent,
    CompreComponent,
    AcordeonComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ferramentasContador';
}

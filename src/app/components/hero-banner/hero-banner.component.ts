import { Component } from '@angular/core';
import { HeaderBarCriadaComponent } from '../header-bar-criada/header-bar-criada.component';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [HeaderBarCriadaComponent],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css',
})
export class HeroBannerComponent {}

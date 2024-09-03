import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-bar-criada',
  standalone: true,
  imports: [],
  templateUrl: './header-bar-criada.component.html',
  styleUrl: './header-bar-criada.component.css',
})
export class HeaderBarCriadaComponent implements OnInit {
  
  ngOnInit(): void {
    const hamburguer = document.querySelector(".hamburguer");

    const nav = document.querySelector(".nav");

    hamburguer?.addEventListener("click", () => nav?.classList.toggle("active"));
  }
}
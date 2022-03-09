import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-idioma-nativo',
  templateUrl: './combo-idioma-nativo.component.html',
  styleUrls: ['./combo-idioma-nativo.component.css']
})
export class ComboIdiomaNativoComponent implements OnInit {

  idiomas = [
    "Português do Brasil",
    "Inglês",
    "Espanhol",
    "Francês",
    "Alemão"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

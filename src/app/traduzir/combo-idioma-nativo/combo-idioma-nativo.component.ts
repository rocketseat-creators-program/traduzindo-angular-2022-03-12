import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-idioma-nativo',
  templateUrl: './combo-idioma-nativo.component.html',
  styleUrls: ['./combo-idioma-nativo.component.css']
})
export class ComboIdiomaNativoComponent implements OnInit {

  idiomas = [
    "Language.Brazil",
    "Language.English",
    "Language.Spanish",
    "Language.French",
    "Language.German"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

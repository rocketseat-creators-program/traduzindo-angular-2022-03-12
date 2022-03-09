import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-acessar-site',
  templateUrl: './dropdown-acessar-site.component.html',
  styleUrls: ['./dropdown-acessar-site.component.css']
})
export class DropdownAcessarSiteComponent implements OnInit {

  sites = [
    "Rocketseat",
    "Google",
    "Microsoft"
  ];

  constructor() { }

  ngOnInit(): void {

  }

}

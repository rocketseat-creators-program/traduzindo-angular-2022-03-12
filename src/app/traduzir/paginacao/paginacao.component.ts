import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  totalItems = 64;
  currentPage = 4;

  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

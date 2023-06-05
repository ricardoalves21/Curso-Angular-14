//Esta é a classe responsável por adicionar comportamento, ações e lógica em nossa página
//É conhecida como os bastidores de um evento, é a responsável por fazer o evento funcionar
//Chamada de classe 'COMPONENT'

import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Novo pensamento criado!');
  }

  cancelarPensamento() {
    alert('Cancelar pensamento criado!');
  }
}

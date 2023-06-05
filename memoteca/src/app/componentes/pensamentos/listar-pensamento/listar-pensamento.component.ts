import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listarPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo1',
    },
    {
      conteudo:
        'Em seu sentido mais comum, os termos pensamento e pensar referem-se a processos cognitivos conscientes que podem acontecer independentemente da estimulação sensorial. Suas formas mais paradigmáticas são o juízo, o raciocínio, a formação de conceitos, a resolução de problemas e a deliberação. Mas outros processos mentais, como considerar uma ideia, memória ou imaginação, também são frequentemente incluídos. Estes processos podem acontecer internamente independentemente dos órgãos sensoriais, ao contrário da percepção.',
      autoria: '',
      modelo: 'modelo2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

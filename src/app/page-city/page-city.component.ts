import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-city',
  imports: [CommonModule],
  templateUrl: './page-city.component.html',
  styleUrl: './page-city.component.css'
})
export class PageCityComponent {
  cards = [
    {
      title: 'PAISAGENS INCRÍVEIS',
      text: 'Serra do Corvo Branco, Cascata do Avencal e muito mais.',
      image: 'paisagens.svg'
    },
    {
      title: 'ALTO POTENCIAL IMOBILIÁRIO',
      text: 'Excelente para quem busca um refúgio ou investimento.',
      image: 'se.svg'
    },
    {
      title: 'CIDADE ACOLHEDORA E VALORIZADA',
      text: 'Eleita uma das 10 mais acolhedoras do mundo!',
      image: 'cityac.svg'
    }
  ];
}

import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Anime } from '../model/anime';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-animes',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatToolbarModule],
  templateUrl: './animes.component.html',
  styleUrl: './animes.component.scss'
})
export class AnimesComponent implements OnInit{

  animes: Anime[] = [
    {_id: '1', name: 'Dragon Ball z', category: 'ação', description: 'lorem samsomado sdksmdms dskdmskmalnas salkdlamkdsasdaka sdlksadmlmd'}
  ];
  displayedColumns = ['name', 'category', 'description'];

  constructor() {
    
  }

  ngOnInit(): void {
    
  }
}

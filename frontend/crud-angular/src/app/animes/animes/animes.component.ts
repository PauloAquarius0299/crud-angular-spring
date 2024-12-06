import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Anime } from '../model/anime';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AnimesService } from '../services/animes.service';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http'; // Importando o HttpClientModule

@Component({
  selector: 'app-animes',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule  // Incluindo o HttpClientModule aqui
  ],
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {

  animes: Observable<Anime[]>;
  displayedColumns = ['name', 'category', 'description'];

  constructor(private animesService: AnimesService) {
    this.animes = this.animesService.list();
  }

  ngOnInit(): void {
  }
}

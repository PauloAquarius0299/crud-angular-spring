import { Component, OnInit } from '@angular/core';
import { Anime } from '../model/anime';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AnimesService } from '../services/animes.service';
import { catchError, Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ErroDialogComponent } from '../../../app/shared/components/erro-dialog/erro-dialog.component'

@Component({
  selector: 'app-animes',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {

  animes$: Observable<Anime[]>;
  displayedColumns = ['name', 'category', 'description'];

  constructor(
    private animesService: AnimesService,
    public dialog: MatDialog
  ) {
    this.animes$ = this.animesService.list().pipe(
      catchError(error => {
        this.onError('Error ao carregar os animes')
        return of([])
      })
    )

  }

  onError(errorMsg: string){
    this.dialog.open(ErroDialogComponent, {
      data: {
        animal: 'panda'
      }
    })
  }

  ngOnInit(): void {

  }
}

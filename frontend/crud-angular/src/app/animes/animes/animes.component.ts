import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
import { CategoryPipe } from '../../shared/pipes/category.pipe';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animes',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    CategoryPipe
  ],
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AnimesComponent implements OnInit {

  animes$: Observable<Anime[]>;
  displayedColumns = ['name', 'category', 'description', 'actions'];

  constructor(
    private animesService: AnimesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
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

  onAdd(){
    this.router.navigate(['animes/new']);
  }
}

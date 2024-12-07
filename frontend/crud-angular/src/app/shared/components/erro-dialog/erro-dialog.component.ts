import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-erro-dialog',
  standalone: true,
  imports: [],
  templateUrl: './erro-dialog.component.html',
  styleUrl: './erro-dialog.component.scss'
})
export class ErroDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string){}

  ngOnInit(): void {

  }
}

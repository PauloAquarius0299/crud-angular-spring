import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { AnimesService } from '../services/animes.service';

@Component({
  selector: 'app-anime-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './anime-form.component.html',
  styleUrl: './anime-form.component.scss'
})
export class AnimeFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    //private service: AnimesService
  ){
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
      description: [null]
  })
  }

  ngOnInit(): void {

  }

  onSubmit(){
    //this.service.save(this.form.value);
  }

  onCancel(){

  }

}

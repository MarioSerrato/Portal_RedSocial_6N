import { Component, OnInit } from '@angular/core';
import { GeneroServiceService } from '../genero-service.service';

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css']
})
export class GenerosComponent implements OnInit {

  constructor(public generoService:GeneroServiceService) { }

  ngOnInit(): void {
    this.generoService.TodosGeneros();
  }

}

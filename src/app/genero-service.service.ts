import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Generos, ResultadoGeneros } from 'src/Models/Generos';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeneroServiceService {
  apiURL='https://localhost:44398/';
  listaGeneros:Generos[]=[];
  resultadoApi:ResultadoGeneros=new ResultadoGeneros;
  genero:Generos=new  Generos;

  constructor(private http:HttpClient) { }

  TodosGeneros(){
    this.http.get(this.apiURL + 'api/Generos/TodosGeneros').subscribe(
      data=>
      {
        this.resultadoApi=data as ResultadoGeneros;
        this.listaGeneros=this.resultadoApi.listaGeneros as Generos[];
      });
  }
  GuardarGenero(genero:Generos):Observable<Generos>{
    return this.http.post<Generos>(this.apiURL + 'api/Generos/InsertarGenero',genero);

  }
}
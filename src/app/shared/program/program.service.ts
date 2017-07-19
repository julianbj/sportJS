import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import { Program } from './program';
import {Http} from "@angular/http";
import {extractProgramSymbols} from "@angular/compiler";

@Injectable()
export class ProgramService {

  constructor(private http: Http) {

    this.http.get('/api/programs')
      .do(res => console.log(res))
      .map(res => {res.status = 201;
      return res})
      .filter(res => res.status == 200)
      .subscribe(test => console.log(test.json()));
    console.log('ici');
  }

  /**
   * voir la page /plan, il doit y avoir 3 éléments
   * @returns {null}
   */
  findAll(): Observable<Program[]> {
    return this.http.get('/api/programs').map(res => res.json());
  }

  /**
   * voir la page /run, le switch doit avoir 3 élément + autre
   * @returns {null}
   */
  findAllPlusEmpty(): Observable<Program[]> {
    return this.findAll().map(programs => [...programs, {name :'complique'}]);
  }

  /**
   * accéder au détail d'un programme /plan/0
   * @param index
   * @returns {null}
   */
  getProgramByIndex(index: number): Observable<any> {
    return this.http.get(`/api/programs/${index}`).map(res => res.json());
  }

  /**
   * faites une mise à jour d'un programme (description ?) et faites un rafraïchissment de la page
   * @param index
   * @param program
   */
  updateProgram(index: number, program: Program): void {
    this.http.post(`/api/programs/${index}`, program).subscribe();
  }

  /**
   * créez un programme
   * @param program
   */
  addProgram(program: Program): void {
    this.http.post('/api/programs/', program).subscribe();
  }

  /**
   * supprimer un programme
   * @param index
   */
  deleteProgram(index: number): void {
    this.http.delete(`/api/programs/${index}`).subscribe();
  }
}

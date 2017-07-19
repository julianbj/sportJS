import { Pipe, PipeTransform } from '@angular/core';
import {Exercice, ExerciceCategory} from '../program/exercice';
import {Record} from "../record/record";

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(exercices: Record[], cat: ExerciceCategory): Record[] {
    if (!cat || !exercices) {
      return exercices;
    }
    return exercices.filter(e => e.category === cat);
  }
}

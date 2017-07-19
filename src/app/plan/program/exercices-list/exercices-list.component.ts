import {Component, Input, OnInit} from '@angular/core';
import {CARDIO_TRAINING, Exercice, LESSON, REINFORCEMENT} from "../../../shared/program/exercice";

@Component({
  selector: 'sp-exercices-list',
  templateUrl: './exercices-list.component.html',
  styleUrls: ['./exercices-list.component.scss']
})
export class ExercicesListComponent implements OnInit {

  @Input() exercices: Exercice[];

  constructor() { }

  ngOnInit() { }

  delete(exercice: Exercice): void {
    console.log('Delete');
    this.exercices.splice(this.exercices.indexOf(exercice),1);
  }

  up(exercice: Exercice): void {
    console.log('up');
    const indexExercice = this.exercices.indexOf(exercice);
    const indexExerciceM1 = indexExercice - 1;
    this.exercices[indexExercice] = this.exercices[indexExerciceM1];
    this.exercices[indexExerciceM1] = exercice;
  }

  down(exercice: Exercice): void {
    console.log('down');
    const indexExercice = this.exercices.indexOf(exercice);
    const indexExerciceP1 = indexExercice + 1;
    this.exercices[indexExercice] = this.exercices[indexExerciceP1];
    this.exercices[indexExerciceP1] = exercice;
  }

  getClassByCategory (exercice : Exercice) : string {
    if(exercice.category === LESSON) {
      return 'flaticon-people'
    } else if (exercice.category === CARDIO_TRAINING) {
      return 'flaticon-man-cycling'
    } else {
      return 'flaticon-weightlifting'
    }
  }
}

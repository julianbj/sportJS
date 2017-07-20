import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecordStoreService} from "../../record-store.service";
import {Observable} from "rxjs/Observable";
import {Record} from "../../../shared/record/record";
import 'rxjs/add/operator/reduce'
import 'rxjs/add/operator/max'
import 'rxjs/add/operator/min'
import 'rxjs/add/operator/last'
import 'rxjs/add/observable/from'
import {Subject} from "rxjs/Subject";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'sp-synthesis',
  templateUrl: './synthesis.component.html',
  styleUrls: ['./synthesis.component.scss']
})
export class SynthesisComponent implements OnInit, OnDestroy {

  record$: Observable<Record>;
  recordSub : Subscription;
  typeSub : Subscription;
  durationSub : Subscription;
  // faire pareil pour Min Max Moy

  destroyObservable = new Subject<void>();

  constructor(private recordStoreService: RecordStoreService) {
  }

  ngOnInit() {
    this.record$ = this.recordStoreService.getSelectedRecord$();
    this.record$.takeUntil(this.destroyObservable).subscribe(val => console.log(val));
    this.getType$().takeUntil(this.destroyObservable).subscribe(val => console.log(val));
    this.getDuration$().takeUntil(this.destroyObservable).subscribe(val => console.log(val));

    //this.recordSub = this.record$.subscribe(val => console.log(val));
    //this.typeSub = this.getType$().subscribe(val => console.log(val));
    //this.durationSub = this.getDuration$().subscribe(val => console.log(val));
    //this.getMax$().subscribe(val => console.log(val));
    //this.getMin$().subscribe(val => console.log(val));
    //this.getAverage$().subscribe(val => console.log(val));

  }


  ngOnDestroy(): void {
    //this.recordSub.unsubscribe();
    //this.typeSub.unsubscribe();
    //this.durationSub.unsubscribe();

    this.destroyObservable.next();
    this.destroyObservable.complete();
  }

  getType$(): Observable<string> {
    return this.record$
      .filter(record => record !== null)
      .map(record => record.type);
  }

  getDuration$(): Observable<string> {
    //return this.record$
    // .filter(record => record !== null)
    //.map(record => record.heartBeats)
    //.map(h => h[h.length-1])
    //.map(h => h.x +1)
    //.map(x => `${Math.floor(x/60)}''${x%60}`)

    return this.record$
      .filter(record => record !== null)
      .mergeMap(record => Observable.from(record.heartBeats).last())
      .map(h => h.x + 1)
      .map(x => `${Math.floor(x / 60)}''${x % 60}`);
  }

  getMax$(): Observable<number> {
    return this.record$
      .filter(record => record !== null)
      .mergeMap(record => Observable.from(record.heartBeats)
        .map(h => h.y)
        .max());
  }

  getMin$(): Observable<number> {
    return this.record$
      .filter(record => record !== null)
      .mergeMap(record => Observable.from(record.heartBeats)
        .map(h => h.y)
        .min());
  }

  getAverage$(): Observable<any> {
    return this.record$
      .filter(record => record !== null)
      .mergeMap(record => Observable.from(record.heartBeats)
        .map(h => h.y)
        .reduce(cumulPourMoyenne, {somme: 0, nombreElement: 0})
        .map(cumul => cumul.somme / cumul.nombreElement));

    function cumulPourMoyenne(cumul, y) {
      return {
        somme: cumul.somme + y,
        nombreElement: cumul.nombreElement + 1
      };
    }
  }

}

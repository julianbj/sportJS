import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgramService } from './program/program.service';
import { RecordService } from './record/record.service';
import { FilterRecordByCategoryPipe } from './record/filter-record-by-category.pipe';
import { ParseLineBreakPipe } from './utils/parseLineBreak/parse-line-break.pipe';
import { AutofocusDirective } from './autofocus/autofocus.directive';
import { PopinComponent } from './popin/popin.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    FilterRecordByCategoryPipe,
    ParseLineBreakPipe,
    AutofocusDirective,
    PopinComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FilterRecordByCategoryPipe,
    ParseLineBreakPipe,
    AutofocusDirective,
    PopinComponent
  ],
  providers: [
    ProgramService,
    RecordService
  ]
})
export class SharedModule { }

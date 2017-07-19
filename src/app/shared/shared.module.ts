import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PopinComponent } from './popin/popin.component';
import { AutoFocusDirective } from './auto-focus/auto-focus.directive';
import { ProgramService } from './program/program.service';
import { RecordService } from './record/record.service';
import { ParsebreaklinePipe } from './utils/parsebreakline.pipe';
import { FilterByCategoryPipe } from './utils/filter-by-category.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    PopinComponent,
    AutoFocusDirective,
    ParsebreaklinePipe,
    FilterByCategoryPipe
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    PopinComponent,
    AutoFocusDirective,
    ParsebreaklinePipe,
    FilterByCategoryPipe
  ],
  providers: [
    ProgramService,
    RecordService
  ]
})
export class SharedModule { }

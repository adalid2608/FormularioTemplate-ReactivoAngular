import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

import { CommonModule } from '@angular/common';
import { CustomSnackComponent } from './components/custom-snack/custom-snack.component';
import { FormulariosRoutingModule } from './formularios-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { NgModule } from '@angular/core';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { TemplateComponent } from './pages/template/template.component';

@NgModule({
  declarations: [
    TemplateComponent,
    CustomSnackComponent,
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule
  ]
})
export class FormulariosModule { }

import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormulariosRoutingModule } from './formularios-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { NgModule } from '@angular/core';
import { TemplateComponent } from './pages/template/template.component';

@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,
    FormulariosRoutingModule,
    FormsModule,
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

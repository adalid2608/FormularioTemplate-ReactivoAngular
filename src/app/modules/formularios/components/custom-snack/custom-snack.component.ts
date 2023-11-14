import { Component, inject } from '@angular/core';

import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-snack',
  templateUrl: './custom-snack.component.html',
  styleUrls: ['./custom-snack.component.scss']
})
export class CustomSnackComponent {
  snackBarRef = inject(MatSnackBarRef);
}

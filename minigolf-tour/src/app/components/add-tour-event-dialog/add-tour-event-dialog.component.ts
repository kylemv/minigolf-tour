import { Component, Inject, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { 
    MAT_DIALOG_DATA,
    MatDialogRef,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
} from '@angular/material/dialog';

import { TourEvent } from '../../types/TourEvent';
import { TourDataService } from '../../services/tour-data.service';

export interface DialogData
{
    event: TourEvent;
};

@Component({
  selector: 'app-add-tour-event-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './add-tour-event-dialog.component.html',
  styleUrl: './add-tour-event-dialog.component.css'
})

export class AddTourEventDialogComponent {
    dataService: TourDataService = inject(TourDataService);

    constructor(
        public dialogRef: MatDialogRef<AddTourEventDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}

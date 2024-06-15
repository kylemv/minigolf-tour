import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

import { 
    MAT_DIALOG_DATA,
    MatDialogRef,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose
} from '@angular/material/dialog';

import { Course } from '../../types/Course';

@Component({
  selector: 'app-add-course-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatListModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './add-course-dialog.component.html',
  styleUrl: './add-course-dialog.component.css'
})
export class AddCourseDialogComponent {
    constructor (
        public dialogRef: MatDialogRef<AddCourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Course,
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    addHoles(num: number): void {
        if (!this.data.holes) {
            this.data.holes = []
        }

        if (num >= this.data.holes.length) {
            for (let n = this.data.holes.length ; n < num; n++) {
                this.data.holes.push(
                    {
                        name: 'New Hole',
                        number: n+1,
                        par: 4
                    }
                );
            }
        }
        else
        {
            for (let n = this.data.holes.length ; n >= num; n--) {
                this.data.holes.pop();
            }
        }
        this.updatePar();
    }

    updatePar(): void {
        let par = 0;
        for (let hole of this.data.holes) {
            par += hole.par.valueOf();
        }
        this.data.par = par;
    }
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { Course } from '../../types/Course';
import { TourDataService } from '../../services/tour-data.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
    dataService: TourDataService = inject(TourDataService);

    courses: Course[] = [];
    displayedColumns: string[] = ['Name', 'ID', 'Holes', 'Par', 'Details'];
    columnsToDisplay: string[] = this.displayedColumns.slice();

    constructor() {
        this.courses = this.dataService.getCourses();
    }
}

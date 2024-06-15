import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatToolbar } from '@angular/material/toolbar';

import { Course } from '../../types/Course';
import { TourDataService } from '../../services/tour-data.service';
import { AddCourseDialogComponent } from '../add-course-dialog/add-course-dialog.component';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatToolbar
    ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit, AfterViewInit {
    dataService: TourDataService = inject(TourDataService);

    courses: Course[] = [];

    displayedColumns: string[] = ['Name', 'ID', 'Holes', 'Par', 'Details'];
    
    @ViewChild(MatTable) table!: MatTable<Course>;

    constructor(public dialog: MatDialog) {
        
    }

    ngOnInit(): void {
        this.courses = this.dataService.getCourses();
    }

    ngAfterViewInit(): void {
        
    }

    addCourseDialog(): void {
        let newCourse: Course = {
            name: 'New Course',
            id: 0,
            par: 0,
            holes: []
        };

        const dialogRef = this.dialog.open(AddCourseDialogComponent, {
            height: 'auto',
            width: '60%',
            data: { course: newCourse}
        });

        dialogRef.afterClosed().subscribe(result => {
            this.upload(result);
            this.table.renderRows();
        });
    }

    upload(course: Course): void {
        console.log(course);
        this.dataService.addCourse(course);
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  editMode = false;

  ngOnInit(): void {}

  toggleEditMode(): void {
    this.editMode = !this.editMode;
    console.log(this.editMode);
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.css']
})
export class WorkoutComponent {
  workouts:any;

  constructor(http : HttpClient) {
    let resp = http.get("http://localhost:5000/admin/workout");
    resp.subscribe((data)=>this.workouts = data);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkoutComponent } from './workout/workout.component';
import { ActivityComponent } from './activity/activity.component';
import { LocationComponent } from './location/location.component';
import { UserComponent } from './user/user.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { SetComponent } from './set/set.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: '', component: WorkoutComponent},
  { path: 'admin/workout', component: WorkoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
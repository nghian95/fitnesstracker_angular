import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WorkoutComponent } from './workout/workout.component';
import { ActivityComponent } from './activity/activity.component';
import { LocationComponent } from './location/location.component';
import { UserComponent } from './user/user.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { SetComponent } from './set/set.component';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutComponent,
    ActivityComponent,
    LocationComponent,
    UserComponent,
    ActivityListComponent,
    SetComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

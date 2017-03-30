import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AppComponent, NavBarComponent, EventListComponent, EventThumbnailComponent, Error404Component, CreateEventComponent, EventDetailsComponent, CreateSessionComponent } from './components/index';
import { FlexLayoutModule } from "@angular/flex-layout";
import { EventService, EventListResolverService, EventRouteActivatorService } from "./services/index";
import { appRoutes } from './routes';
import { AuthService } from './userModule/auth.service';

import 'hammerjs';
import { SessionListComponent } from './components/session-list/session-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EventListComponent,
    EventThumbnailComponent,
    Error404Component,
    CreateEventComponent,
    EventDetailsComponent,
    CreateSessionComponent,
    SessionListComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  providers: [
    EventService,
    EventRouteActivatorService,
    EventListResolverService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?');
  return true
}

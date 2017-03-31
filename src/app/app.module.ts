import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { AppComponent, NavBarComponent, EventListComponent, EventThumbnailComponent, Error404Component, CreateEventComponent, EventDetailsComponent,
  CreateSessionComponent, SessionListComponent, CollapsibleWellComponent, UpvoteComponent, SimpleModalComponent  } from './components/index';
import { FlexLayoutModule } from "@angular/flex-layout";
import { EventService, EventListResolverService, EventRouteActivatorService, VoterService } from "./services/index";
import { appRoutes } from './routes';
import { AuthService } from './userModule/auth.service';
import { DurationPipe } from './shared/index';
import { Toastr, JQ_TOKEN, TOASTR_TOKEN } from './common/index';

import 'hammerjs';
import { ModalTriggerDirective, LocationValidator } from './directives/index';

//declare let toastr : Toastr;
//declare let jQuery : Object;

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
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    ModalTriggerDirective,
    SimpleModalComponent,
    UpvoteComponent,
    LocationValidator
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
    VoterService,
   // { provide: TOASTR_TOKEN, useValue: toastr },
   // { provide: JQ_TOKEN, useValue: jQuery },
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

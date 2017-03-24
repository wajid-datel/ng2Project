/**
 * Created by wajid on 24/03/2017.
 */
import { Routes } from "@angular/router";
import { EventListComponent, Error404Component, CreateEventComponent, EventDetailsComponent } from "./components/index";
import { EventListResolverService, EventRouteActivatorService } from "./services/index";

export const appRoutes: Routes= [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventListComponent, resolve: {events:EventListResolverService} },
  { path: 'events/id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];

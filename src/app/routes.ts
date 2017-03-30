/**
 * Created by wajid on 24/03/2017.
 */
import { Routes } from "@angular/router";
import { EventListComponent, Error404Component, CreateEventComponent, EventDetailsComponent, CreateSessionComponent } from "./components/index";
import { EventListResolverService, EventRouteActivatorService } from "./services/index";

export const appRoutes: Routes= [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventListComponent, resolve: {events:EventListResolverService} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'user', loadChildren: 'app/userModule/user.module#UserModule'}
];

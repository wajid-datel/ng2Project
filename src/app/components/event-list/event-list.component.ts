import { Component, OnInit } from '@angular/core';
import {MdSnackBar} from '@angular/material';
import { EventService } from '../../services/event.service';
import { ActivatedRoute } from '@angular/router'
import { IEvent } from '../../../models/event.model';

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events:IEvent[];
  constructor(private eventService: EventService, private snackBar: MdSnackBar, private route:ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName) {
    this.snackBar.open(eventName, "OK", {
      duration: 2000,
    });
  }

}

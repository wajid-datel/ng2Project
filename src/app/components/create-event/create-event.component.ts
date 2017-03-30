import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { EventService } from '../../services/event.service';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty:boolean = true;
  constructor(private router: Router, private eventService:EventService) {

  }

  ngOnInit() {
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel() {
    this.router.navigate(['/events']);
  }
}

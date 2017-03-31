import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../userModule/auth.service';
import { EventService } from '../../services/index';
import { ISession }  from '../../../models/event.model';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavBarComponent implements OnInit {
  searchTerm: string = "";
  foundSessions: ISession[];

  constructor(private auth: AuthService, private eventService: EventService) {
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    })
  }

  ngOnInit() {
  }

}

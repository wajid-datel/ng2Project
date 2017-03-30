import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../userModule/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['navbar.component.scss']
})
export class NavBarComponent implements OnInit {
  constructor(private auth: AuthService) {

  }

  ngOnInit() {
  }

}

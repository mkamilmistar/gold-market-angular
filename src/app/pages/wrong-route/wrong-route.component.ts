import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar/navbar.service';

@Component({
  selector: 'app-wrong-route',
  templateUrl: './wrong-route.component.html',
  styleUrls: ['./wrong-route.component.scss']
})
export class WrongRouteComponent implements OnInit {

  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
    this.nav.hide();
  }

}

import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar/navbar.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  displayFormat = "dddd, DD MMMM YYYY";

  constructor(public nav: NavbarService) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let elementNav = document.querySelector('.navbar') as HTMLElement;
    let elementDate = document.querySelector('.badge') as HTMLElement;
    let elementTitle = document.querySelectorAll(".nav-item");
    
    if (window.pageYOffset <= 80) {
      elementNav.classList.add('bg-transparent');
      elementDate.classList.add('text-white')

      for (let i = 0; i < elementTitle.length; i++) {
        elementTitle[i].classList.add('text-gold')
      }
    } else {
      elementNav.classList.add('bg-light');
      elementNav.classList.remove('bg-transparent');
      elementDate.classList.remove('text-white')
      elementDate.classList.add('text-secondary')

      
      for (let i = 0; i < elementTitle.length; i++) {
        elementTitle[i].classList.remove('text-gold')
      }
    }
  } 
  
}
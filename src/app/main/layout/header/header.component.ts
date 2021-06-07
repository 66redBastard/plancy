import {
  Component,
  OnInit,
  HostListener,
  Inject,
  OnDestroy,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LayoutService } from '../services/layout.service';
import { User } from '../../../auth/models/user';
import { AccountService } from '../../../auth/services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuOpened: boolean;
  currentPosition;

  user: User;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private layoutservice: LayoutService,
    private accountService: AccountService,
  ) {
    this.accountService.user.subscribe((x) => (this.user = x));
    this._document.addEventListener('scroll', this.onContentScrolled);
  }

  ngOnInit() {
    this.layoutservice.isMenuOpened.subscribe((x: boolean) => {
      this.isMenuOpened = x;
    });
  }

  toggleMenuVisibility() {
    this.layoutservice.toggleMenuVisibility();
  }
  logout() {
    this.accountService.logout();
  }

  OnDestroy() {
    this._document.removeEventListener('scroll', this.onContentScrolled);
  }

  onContentScrolled = (e) => {
    let scroll = window.pageYOffset;
    let header = document.getElementById('header-main-page');
    let logoText = document.getElementById('logo-text');
    let navLinks = document.getElementById('nav-links-container');
    // const elements = document.getElementsByClassName('nav-link');

    if (scroll > this.currentPosition) {
      console.log('scrollDown');

      header.classList.add('header--onscroll-down');
      logoText.classList.add('text-dark');
      navLinks.classList.add('nav-onscroll');

      // for (let element of elements) {
      //   element.classList.add('text-dark');
      // }
    } else {
      header.classList.remove('header--onscroll-down');
      logoText.classList.remove('text-dark');
      navLinks.classList.remove('nav-onscroll');
      console.log('scrollUp');
    }
    this.currentPosition = scroll;
  };
}

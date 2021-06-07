import { Component, OnInit } from '@angular/core';
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

  user: User;

  constructor(
    private layoutservice: LayoutService,
    private accountService: AccountService,
  ) {
    this.accountService.user.subscribe((x) => (this.user = x));
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
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../auth/models/user';
import { AccountService } from '../../../auth/services/account.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [
    './layout.component.scss',
    '../../../../../node_modules/bootstrap/dist/css/bootstrap.css',
  ],
})
export class LayoutComponent {
  constructor(private router: Router, private accountService: AccountService) {
    this.accountService.user.subscribe((x) => (this.user = x));
    // redirect to home if already logged in
    if (this.accountService.userValue) {
      this.router.navigate(['/']);
    }
  }

  user: User;

  logout() {
    this.accountService.logout();
  }
}

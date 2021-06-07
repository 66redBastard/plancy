import { Component } from '@angular/core';
import { AccountService } from '../../../auth/services/account.service';
import { User } from '../../../auth/models/user';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: [
    // './account-header.component.scss',
    '../../../../../node_modules/bootstrap/dist/css/bootstrap.css',
  ],
})
export class AccountHeaderComponent {
  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
  }
}

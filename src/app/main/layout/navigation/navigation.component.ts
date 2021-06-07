import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isMenuOpened: boolean;

  constructor(private layoutservice: LayoutService) {}

  ngOnInit() {
    this.layoutservice.isMenuOpened.subscribe((x: boolean) => {
      this.isMenuOpened = x;
    });
  }

  toggleMenuVisibility() {
    this.layoutservice.toggleMenuVisibility();
  }
}

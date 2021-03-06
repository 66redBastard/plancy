import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  menuOpened = false;

  constructor() {}

  private click = new BehaviorSubject<boolean>(this.menuOpened);
  isMenuOpened = this.click.asObservable();

  toggleMenuVisibility() {
    const body = document.getElementById('body');

    this.menuOpened = !this.menuOpened;
    this.click.next(this.menuOpened);

    if (this.menuOpened === true) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  }
}

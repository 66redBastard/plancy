import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubmitFormService {
  tooglePopup: boolean = false;
  constructor() {}

  private submit = new BehaviorSubject<boolean>(this.tooglePopup);
  tooglePopupView = this.submit.asObservable();

  tooglePopupVisibility() {
    const body = document.getElementById('body');
    this.tooglePopup = !this.tooglePopup;
    this.submit.next(this.tooglePopup);

    if (this.tooglePopup === true) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  }
}

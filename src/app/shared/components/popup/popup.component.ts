import { Component, OnInit } from '@angular/core';
import { SubmitFormService } from '../../services/submit-form.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  tooglePopupView: boolean;

  constructor(private submitService: SubmitFormService) {}

  ngOnInit() {
    this.submitService.tooglePopupView.subscribe((x: boolean) => {
      this.tooglePopupView = x;
    });
  }
  closePopupBtn() {
    this.submitService.tooglePopupVisibility();
  }
}

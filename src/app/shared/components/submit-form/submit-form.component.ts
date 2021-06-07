import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { SubmitFormService } from '../../services/submit-form.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-submit-form',
  templateUrl: './submit-form.component.html',
  styleUrls: ['./submit-form.component.scss'],
})
export class SubmitFormComponent implements OnInit {
  tooglePopupView: boolean;
  email = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
  ]);

  constructor(
    private http: HttpClient,
    private submitService: SubmitFormService,
  ) {}

  get userEmail() {
    return this.email;
  }

  ngOnInit() {
    this.submitService.tooglePopupView.subscribe((x: boolean) => {
      this.tooglePopupView = x;
    });
  }

  triggerSubmit() {
    this.onSubmitEmail();
  }

  onSubmitEmail() {
    if (this.email.invalid) {
      return console.log('Invalid email');
    }

    return this.http
      .post(`${environment.apiUrl}/contact`, { email: this.email.value })
      .subscribe(
        (response) => {
          console.log(response);
          this.submitService.tooglePopupVisibility();
        },
        (error) => console.log(error),
      );
  }
}

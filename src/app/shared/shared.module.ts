import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountHeaderComponent } from './components/account-header/account-header.component';
import { PopupComponent } from './components/popup/popup.component';

@NgModule({
  declarations: [AccountHeaderComponent, PopupComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}

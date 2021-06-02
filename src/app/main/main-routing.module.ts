import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [{ path: '', component: MainPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}

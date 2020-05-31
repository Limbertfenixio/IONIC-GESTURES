import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnPressedPage } from './on-pressed.page';

const routes: Routes = [
  {
    path: '',
    component: OnPressedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnPressedPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlideDrawerPage } from './slide-drawer.page';

const routes: Routes = [
  {
    path: '',
    component: SlideDrawerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlideDrawerPageRoutingModule {}

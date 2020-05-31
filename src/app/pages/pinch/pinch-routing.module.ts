import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinchPage } from './pinch.page';

const routes: Routes = [
  {
    path: '',
    component: PinchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinchPageRoutingModule {}

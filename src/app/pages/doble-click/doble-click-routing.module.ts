import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DobleClickPage } from './doble-click.page';

const routes: Routes = [
  {
    path: '',
    component: DobleClickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DobleClickPageRoutingModule {}

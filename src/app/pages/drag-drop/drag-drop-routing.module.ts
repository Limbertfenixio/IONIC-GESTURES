import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DragDropPage } from './drag-drop.page';

const routes: Routes = [
  {
    path: '',
    component: DragDropPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DragDropPageRoutingModule {}

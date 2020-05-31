import { DropComponent } from './../../components/dragdrop/drop/drop.component';
import { DraggableComponent } from './../../components/dragdrop/draggable/draggable.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DragDropPageRoutingModule } from './drag-drop-routing.module';

import { DragDropPage } from './drag-drop.page';

@NgModule({
  entryComponents: [DraggableComponent, DropComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DragDropPageRoutingModule
  ],
  declarations: [DragDropPage, DraggableComponent, DropComponent]
})
export class DragDropPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DobleClickPageRoutingModule } from './doble-click-routing.module';

import { DobleClickPage } from './doble-click.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DobleClickPageRoutingModule
  ],
  declarations: [DobleClickPage]
})
export class DobleClickPageModule {}

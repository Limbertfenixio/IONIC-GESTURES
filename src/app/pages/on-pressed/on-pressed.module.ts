import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnPressedPageRoutingModule } from './on-pressed-routing.module';

import { OnPressedPage } from './on-pressed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnPressedPageRoutingModule
  ],
  declarations: [OnPressedPage]
})
export class OnPressedPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinchPageRoutingModule } from './pinch-routing.module';

import { PinchPage } from './pinch.page';
import { PinchZoomModule } from 'ngx-pinch-zoom';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinchPageRoutingModule,
    PinchZoomModule
  ],
  declarations: [PinchPage]
})
export class PinchPageModule {}

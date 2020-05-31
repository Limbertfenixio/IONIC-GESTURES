import { SlideBottomComponent } from './../../components/slide-bottom/slide-bottom.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlideDrawerPageRoutingModule } from './slide-drawer-routing.module';

import { SlideDrawerPage } from './slide-drawer.page';

@NgModule({
  entryComponents: [SlideBottomComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlideDrawerPageRoutingModule
  ],
  declarations: [SlideDrawerPage, SlideBottomComponent]
})
export class SlideDrawerPageModule {}

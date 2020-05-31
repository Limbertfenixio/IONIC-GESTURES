import { Component, AfterViewInit ,OnInit, ElementRef, Renderer2 } from '@angular/core';
import { GestureConfig, Gesture, GestureController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-slide-bottom',
  templateUrl: './slide-bottom.component.html',
  styleUrls: ['./slide-bottom.component.scss'],
})
export class SlideBottomComponent implements AfterViewInit  {

  gestureOpts: GestureConfig;
  constructor(private element: ElementRef, private render: Renderer2, private gestureCtrl: GestureController, private platform: Platform) { }

  ngAfterViewInit () {
    this.gestureOpts = {
      el: this.element.nativeElement,
      direction: 'y',
      gestureName: 'slide-bottom-sheet',
      onStart: () => {
        this.render.setStyle(this.element.nativeElement, 'transition', 'none');
      },
      onMove: (ev) => {
        console.log('deltaY: ' + ev.deltaY)
        if(ev.deltaY<0){
          this.render.setStyle(this.element.nativeElement, 'transform', `translateY(${ev.deltaY}px)`);
        }
      },
      onEnd: (ev) => {
        console.log(-(+this.platform.height()/2))
        this.render.setStyle(this.element.nativeElement, 'transition', '.5s ease-out')
        if(ev.deltaY < -(+this.platform.height()/2)){
          console.log('fue: ' +this.platform.height() )
          this.render.setStyle(this.element.nativeElement, 'transform', `translateY(${-+this.platform.height() + 100}px)`)
        }else if(ev.deltaY > -(+this.platform.height()/2)){
          this.render.setStyle(this.element.nativeElement, 'transform', ``)
        }else{
          this.render.setStyle(this.element.nativeElement, 'transform', ``)
        }
      }
    }
    const gesture: Gesture = this.gestureCtrl.create(this.gestureOpts)
    gesture.enable();
  }

  ionViewDidEnter(){
   
  }

}

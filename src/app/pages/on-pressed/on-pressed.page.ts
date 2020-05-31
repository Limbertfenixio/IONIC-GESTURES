import { Gesture, GestureController, GestureConfig } from '@ionic/angular';
import { Component, OnInit, ElementRef, ViewChildren, ViewChild, NgZone } from '@angular/core';

@Component({
  selector: 'app-on-pressed',
  templateUrl: './on-pressed.page.html',
  styleUrls: ['./on-pressed.page.scss'],
})
export class OnPressedPage implements OnInit {

  @ViewChild('press') press : ElementRef;
  gestureOpts: GestureConfig;
  longPressActive : boolean = false;
  power = 0;
  constructor(private gestureCtrl: GestureController, private zone: NgZone) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.gestureOpts = {
      el: this.press.nativeElement,
      gestureName: 'on-pressedStart',
      threshold: 0,
      onStart: () => {
        this.longPressActive = true;
        this.onPress();
      },
      onEnd: () => {
        this.longPressActive = false;
        this.onPressUp();
      }
    }
    const gesture: Gesture = this.gestureCtrl.create(this.gestureOpts)
    gesture.enable();
  }

  onPress(){
    console.log("onPress");
    
    //alert('pres')
    setTimeout(() => {
      if(this.longPressActive){
       this.zone.run(() => {
        this.power++;
        console.log(this.power);
        this.onPress();
       })
      }
    }, 1000);
  }

  onPressUp(){
    console.log("onPressUp");
    this.power = 0;
    //alert('presup')
  }

}

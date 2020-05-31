import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Gesture, GestureController, GestureConfig } from '@ionic/angular';

@Component({
  selector: 'app-doble-click',
  templateUrl: './doble-click.page.html',
  styleUrls: ['./doble-click.page.scss'],
})
export class DobleClickPage implements OnInit {

  @ViewChild("myDiv") s: ElementRef;
  private backgrounds: string[] = ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 255, 0, 0.5)', 'rgba(255, 0, 255, 0.5)', 'rgba(0, 255, 255, 0.5)'];
  private currentColor: string = 'rgba(0, 0, 255, 0.5)';
  private lastOnStart: number = 0;
  private DOUBLE_CLICK_THRESHOLD: number = 500;
  gestureOpts: GestureConfig;

  constructor(private gestureCtrl: GestureController) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.gestureOpts = {
      el: this.s.nativeElement,
      threshold: 0,
      gestureName: 'doble-click',
      onStart: () => {
        this.onStart();
      }
    }
    const gesture: Gesture = this.gestureCtrl.create(this.gestureOpts, true);
    gesture.enable();
  }

  onStart(){
    const now = Date.now();
    
    if(Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD){
      alert('doble click!')
      this.s.nativeElement.style.setProperty('background', this.getRandomBackground());
      this.lastOnStart = 0;
    }else{
      this.lastOnStart = now;
    }
  }

  getRandomBackground(){
    const options = this.backgrounds.filter(bg => bg !== this.currentColor);
    this.currentColor = options[Math.floor(Math.random() * options.length)];

    return this.currentColor;
  }
}

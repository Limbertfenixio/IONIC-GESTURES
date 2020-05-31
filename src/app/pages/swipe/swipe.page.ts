import { Component, OnInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { IonCard, GestureConfig, GestureController, Gesture, Platform } from '@ionic/angular';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.page.html',
  styleUrls: ['./swipe.page.scss'],
})
export class SwipePage implements OnInit {

  cards = [
    {
      img: 'https://via.placeholder.com/600/92c952',
      title: 'image 1'
    },
    {
      img: 'https://via.placeholder.com/600/771796',
      title: 'image 2'
    },
    {
      img: 'https://via.placeholder.com/600/d32776',
      title: 'image 3'
    }
  ]

  @ViewChildren(IonCard, {read: ElementRef}) card: QueryList<ElementRef>;
  gestureOpts: GestureConfig;
  
  constructor(private gestureCtrl: GestureController, private platform: Platform) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const cardArray = this.card.toArray();
    this.tinderSwipe(cardArray);
  }

  tinderSwipe(cardArray){
    for(let i = 0; i < cardArray.length; i++){
      const card = cardArray[i];
      this.gestureOpts = {
        el: card.nativeElement,
        gestureName: 'swipe',
        onStart: () => {

        },
        onMove: (ev) => {
          //console.log('ev: ' + JSON.stringify(ev))
          card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10}deg)`
        },
        onEnd: (ev) => {
          //alert(ev.deltaX)
          card.nativeElement.style.transition = '.5s ease-out';2
          console.log(+this.platform.width())
          if(ev.deltaX > (+this.platform.width()/2)){
            card.nativeElement.style.transform = `translateX(${+this.platform.width() * 2}px) rotate(${ev.deltaX / 10}deg)`
          }else if(ev.deltaX < -(+this.platform.width()/2)){
            card.nativeElement.style.transform = `translateX(-${+this.platform.width() * 2}px) rotate(${ev.deltaX / 10}deg)`
          }else{
            card.nativeElement.style.transform = '';
          }
        }
      }
      const gesture: Gesture = this.gestureCtrl.create(this.gestureOpts)
      gesture.enable();
    }
  }
}

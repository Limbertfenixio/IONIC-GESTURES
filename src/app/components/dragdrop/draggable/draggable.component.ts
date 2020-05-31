import { Subscription } from 'rxjs';
import { DropService } from './../../../services/drop.service';
import { Component, AfterViewInit, ElementRef, Input, Renderer2, ViewChildren, QueryList, ViewChild, OnDestroy } from '@angular/core';
import { GestureController, GestureConfig, Gesture, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-draggable',
  templateUrl: './draggable.component.html',
  styleUrls: ['./draggable.component.scss'],
})
export class DraggableComponent implements AfterViewInit, OnDestroy {
  @ViewChild('drag', {read: ElementRef}) card: ElementRef;
  @Input() droppable;
  @Input('drop-data') dropdata;
  gestureOpts: GestureConfig;
  droppableArea$: Subscription;
  
  constructor(private gestureCtrl: GestureController, private render: Renderer2, private dropEvent: DropService) { }

  ngAfterViewInit() {
    this.gestureOpts = {
      el: this.card.nativeElement,
      gestureName: 'draggable',
      threshold: 0,
      onStart: () => {
        this.render.setStyle(this.card.nativeElement, 'transition', 'none');
        this.render.setStyle(this.card.nativeElement, 'opacity', '0.7');
      },
      onMove: (ev) => {
        console.log(ev);
        //this.render.setStyle(this.card.nativeElement, 'background', `red`);
        this.render.setStyle(this.card.nativeElement, 'transform', `translate(${ev.deltaX}px, ${ev.deltaY}px)`);
      },
      onEnd: (ev) => {
        this.render.setStyle(this.card.nativeElement, 'transition', `.3s ease-out`);
        this.render.setStyle(this.card.nativeElement, 'transform', `translate(0, 0)`);
        this.render.setStyle(this.card.nativeElement, 'zIndex', `inherit`);
        this.render.setStyle(this.card.nativeElement, 'opacity', `1`);
        this.dropEvent.publish({ev, dropdata: this.dropdata});
      }
    }
    const gesture: Gesture = this.gestureCtrl.create(this.gestureOpts)
    gesture.enable();
    this.droppableArea$ = this.dropEvent.getPublishDropArea().subscribe((ev) => {
      this.render.setStyle(this.card.nativeElement, 'transform', `translate(${ev.deltaX}px, ${ev.deltaY}px)`);
    });
  }

  ngOnDestroy(){
    this.droppableArea$.unsubscribe();
  }

}

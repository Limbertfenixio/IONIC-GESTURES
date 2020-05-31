import { DropService } from './../../services/drop.service';
import { Component, AfterViewInit ,OnInit, ViewChildren, ElementRef, Renderer2 } from '@angular/core';
import { GestureController } from '@ionic/angular';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.page.html',
  styleUrls: ['./drag-drop.page.scss'],
})
export class DragDropPage implements AfterViewInit {
  @ViewChildren('app-card') card: ElementRef;

  cards = [
    { title: "Drag Me", content: "To another place" },
    { title: "Drag Me", content: "I am a far better candidate for dragging" },
    { title: "Drag Me", content: "To the place, I belong" },
  ];

  constructor(private dropEvent: DropService) { }

  ngAfterViewInit() {
    
  }

  dropped(event){
    console.log('okas' + JSON.stringify(event))
    this.dropEvent.publishDropArea(event);
  }
}

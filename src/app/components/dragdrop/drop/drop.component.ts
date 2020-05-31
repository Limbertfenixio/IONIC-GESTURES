import { DropService } from './../../../services/drop.service';
import { Component, OnInit, EventEmitter, Output, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.scss'],
})
export class DropComponent implements OnInit, OnDestroy {
  event$ : Subscription;
  @Output() elementDroped: EventEmitter<any> = new EventEmitter();
  constructor(private element: ElementRef, private dropEvent$: DropService) { }

  ngOnInit() {
    this.event$ = this.dropEvent$.getPublish().subscribe((data) => {
      this.complete(data.ev, data.dropdata);
    });
  }

  ngOnDestroy(){
    this.event$.unsubscribe();
  }

  public async complete(ev, data){
    if(this.inInsideDroppableArea(ev.currentX, ev.currentY)){
      console.log('ya llego')
      this.elementDroped.emit(ev);
    }
  }

  inInsideDroppableArea(x,y): boolean{
    const droppableArea = this.element.nativeElement.getBoundingClientRect();;
    if(x < droppableArea.left || x >= droppableArea.right){
      return false;
    }
    if(y < droppableArea.top || y >= droppableArea.bottom){
      return false;
    }
    return true;
  }
}
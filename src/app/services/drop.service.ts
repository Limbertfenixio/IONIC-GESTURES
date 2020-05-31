import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropService {

  subject = new Subject<any>();
  dropArea$ = new Subject<any>();

  constructor() { }

  publish(data: any){
    this.subject.next(data);
  }

  getPublish(): Subject<any>{
    return <any>this.subject;
  }

  publishDropArea(data){
    this.dropArea$.next(data);
  }

  getPublishDropArea(): Subject<any>{
    return <any>this.dropArea$;
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.scss'],
})
export class PresentationsComponent implements OnInit {

  @Input() presentations;

  constructor() { }

  ngOnInit() {}

  deletePresentation(index: number){
    this.presentations.splice(index, 1);
  }

}

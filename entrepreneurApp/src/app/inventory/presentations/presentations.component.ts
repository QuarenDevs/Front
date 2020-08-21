import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.scss'],
})
export class PresentationsComponent implements OnInit {

  @Input() presentations;
  presentation;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  deletePresentation(index: number) {
    this.presentations.splice(index, 1);
  }

  editItem(index) {
    this.presentation = this.presentations[index];
  }

}

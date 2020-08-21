import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-presentation-description',
  templateUrl: './presentation-description.component.html',
  styleUrls: ['./presentation-description.component.scss'],
})
export class PresentationDescriptionComponent implements OnInit {
  @Input() presentation;

  constructor() { }

  ngOnInit() {
  }

}

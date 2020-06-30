import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom // introduced in Angular 6.1 (Shadow Dom v1)
  // encapsulation: ViewEncapsulation.Native // deprecated in Angular 6.1+ (Shadow Dom v0)
  // encapsulation: ViewEncapsulation.None
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
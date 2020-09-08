import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-overlay-header',
  templateUrl: './overlay-header.component.html',
  styleUrls: ['./overlay-header.component.scss'],
})
export class OverlayHeaderComponent implements OnInit {
  @Input() headingLabel: string;
  @Input() heading: string;
  @Input() breadcrumb1: string;
  @Input() breadcrumb2: string;

  constructor() {}

  ngOnInit(): void {}
}

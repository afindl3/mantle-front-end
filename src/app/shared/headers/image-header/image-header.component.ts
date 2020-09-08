import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-header',
  templateUrl: './image-header.component.html',
  styleUrls: ['./image-header.component.scss'],
})
export class ImageHeaderComponent implements OnInit {
  @Input() headingLabel: string;
  @Input() heading: string;
  @Input() subheading: string;
  @Input() breadcrumb1: string;
  @Input() breadcrumb2: string;

  constructor() {}

  ngOnInit(): void {}
}

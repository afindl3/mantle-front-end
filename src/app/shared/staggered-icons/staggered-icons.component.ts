import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-staggered-icons',
  templateUrl: './staggered-icons.component.html',
  styleUrls: ['./staggered-icons.component.scss'],
})
export class StaggeredIconsComponent implements OnInit {
  @Input() data: StaggeredIconFields;

  constructor() {}

  ngOnInit(): void {}
}

export type StaggeredIconFields = {
  heading: string;
  subheading: string;
  reasons: Reasons[];
};

type Reasons = {
  title: string;
  description: string;
  image: string;
};

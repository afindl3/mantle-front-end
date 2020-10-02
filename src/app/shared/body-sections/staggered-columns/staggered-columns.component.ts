import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-staggered-columns',
  templateUrl: './staggered-columns.component.html',
  styleUrls: ['./staggered-columns.component.scss'],
})
export class StaggeredColumnsComponent implements OnInit {
  @Input() data: StaggeredColumnFields;
  @Input() style: number;

  constructor() {}

  ngOnInit(): void {}
}

export type StaggeredColumnFields = {
  heading: string;
  subheading: string;
  items: Item[];
};

type Item = {
  title: string;
  description: string;
};

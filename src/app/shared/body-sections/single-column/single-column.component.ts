import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-column',
  templateUrl: './single-column.component.html',
  styleUrls: ['./single-column.component.scss'],
})
export class SingleColumnComponent implements OnInit {
  @Input() data: SingleColumnFields;

  constructor() {}

  ngOnInit(): void {}
}

export type SingleColumnFields = {
  heading: string;
  items: Item[];
};

type Item = {
  title: string;
  description: string;
};

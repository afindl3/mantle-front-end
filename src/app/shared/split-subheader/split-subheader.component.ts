import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-split-subheader',
  templateUrl: './split-subheader.component.html',
  styleUrls: ['./split-subheader.component.scss'],
})
export class SplitSubheaderComponent implements OnInit {
  @Input() heading: string;
  @Input() subheading: string;
  @Input() listItems?: string;

  constructor() {}

  ngOnInit(): void {}
}

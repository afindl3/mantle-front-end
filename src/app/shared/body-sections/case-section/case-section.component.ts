import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-case-section',
  templateUrl: './case-section.component.html',
  styleUrls: ['./case-section.component.scss'],
})
export class CaseSectionComponent implements OnInit {
  @Input() headingLabel: string;
  @Input() heading: string;
  @Input() subheading: string;
  @Input() list: string;
  @Input() image: string;

  constructor() {}

  ngOnInit(): void {}
}

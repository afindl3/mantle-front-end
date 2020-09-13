import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-tile',
  templateUrl: './blog-tile.component.html',
  styleUrls: ['./blog-tile.component.scss'],
})
export class BlogTileComponent implements OnInit {
  @Input() image: string;
  @Input() headingLabel: string;
  @Input() heading: string;
  @Input() body: string;
  @Input() footnote1: string;
  @Input() link: string;
  @Input() footnote2: string;
  @Input() offset: boolean;
  @Input() style: number; // Determines colour of headinng label

  constructor() {}

  ngOnInit(): void {}
}

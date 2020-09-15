import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent implements OnInit {
  @Input() title: string;
  @Input() category: string;
  @Input() description: string;
  @Input() style: number;
  @Input() link: string;
  @Input() size: number; // 1 - small, 2 - large

  constructor() {}

  ngOnInit(): void {}
}

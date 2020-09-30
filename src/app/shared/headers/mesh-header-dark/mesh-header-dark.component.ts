import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mesh-header-dark',
  templateUrl: './mesh-header-dark.component.html',
  styleUrls: ['./mesh-header-dark.component.scss'],
})
export class MeshHeaderDarkComponent implements OnInit {
  @Input() headingLabel: string;
  @Input() heading: string;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mesh-header-light',
  templateUrl: './mesh-header-light.component.html',
  styleUrls: ['./mesh-header-light.component.scss'],
})
export class MeshHeaderLightComponent implements OnInit {
  @Input() headingLabel: string;
  @Input() heading: string;
  @Input() subheading: string;
  @Input() breadcrumb1: string;
  @Input() breadcrumb2: string;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit, Input } from '@angular/core';
import { RoutingService } from '../../../services/routing/routing.service';

@Component({
  selector: 'app-mesh-header-light',
  templateUrl: './mesh-header-light.component.html',
  styleUrls: ['./mesh-header-light.component.scss'],
})
export class MeshHeaderLightComponent implements OnInit {
  @Input() headingLabel: string;
  @Input() heading: string;
  @Input() subheading: string;
  @Input() showBreadcrumb: boolean;
  routeSegments: string[];

  constructor(private routingService: RoutingService) { }

  ngOnInit(): void {
    this.routeSegments = this.routingService.getRouteSegments();
  }
}

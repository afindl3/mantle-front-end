import { Component, OnInit, Input } from '@angular/core';
import { RoutingService } from '../../../services/routing/routing.service';

@Component({
  selector: 'app-mesh-header-dark',
  templateUrl: './mesh-header-dark.component.html',
  styleUrls: ['./mesh-header-dark.component.scss'],
})
export class MeshHeaderDarkComponent implements OnInit {
  @Input() headingLabel: string;
  @Input() heading: string;
  @Input() subheading: string;
  routeSegments: string[];

  constructor(private routingService: RoutingService) { }

  ngOnInit(): void {
    this.routeSegments = this.routingService.getRouteSegments();
  }
}

import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RoutingService } from '../../../services/routing/routing.service';

@Component({
  selector: 'app-image-header',
  templateUrl: './image-header.component.html',
  styleUrls: ['./image-header.component.scss'],
})
export class ImageHeaderComponent implements OnInit, OnDestroy {
  @Input() headingLabel: string;
  @Input() heading: string;
  @Input() subheading: string;
  @Input() showBreadcrumb: boolean;
  routeSegments: string[];

  constructor(private routingService: RoutingService) {}

  ngOnInit(): void {
    this.routeSegments = this.routingService.getRouteSegments();
  }

  ngOnDestroy(): void {}
}

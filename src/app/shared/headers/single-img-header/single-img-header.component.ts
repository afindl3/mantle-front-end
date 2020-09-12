import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { RoutingService } from '../../../services/routing/routing.service';

@Component({
  selector: 'app-single-img-header',
  templateUrl: './single-img-header.component.html',
  styleUrls: ['./single-img-header.component.scss'],
})
export class SingleImgHeaderComponent implements OnInit, OnDestroy {
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

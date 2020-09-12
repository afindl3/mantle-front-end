import { Component, OnInit, Input } from '@angular/core';
import { RoutingService } from '../../../services/routing/routing.service';

@Component({
  selector: 'app-multi-img-header',
  templateUrl: './multi-img-header.component.html',
  styleUrls: ['./multi-img-header.component.scss'],
})
export class MultiImgHeaderComponent implements OnInit {
  @Input() headingLabel: string;
  @Input() heading: string;
  @Input() showBreadcrumb: boolean;
  routeSegments: string[];

  constructor(private routingService: RoutingService) {}

  ngOnInit(): void {
    this.routeSegments = this.routingService.getRouteSegments();
  }
}

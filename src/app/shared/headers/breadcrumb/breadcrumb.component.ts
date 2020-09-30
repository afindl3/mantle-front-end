import { Component, OnInit } from '@angular/core';
import { RoutingService } from '../../../services/routing/routing.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  routeSegments: string[];

  constructor(private routingService: RoutingService) {}

  ngOnInit(): void {
    this.routeSegments = this.routingService.getRouteSegments();
  }
}

import {Component, OnInit} from '@angular/core';
import { RoutingConfiguration } from '../routing-configuration';

@Component({
  selector: 'module-federation-navigation-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {
  invoices = false;
  projects = false;
  topBar = false;

  constructor(private routeConfiguration: RoutingConfiguration) { }

  ngOnInit(): void {
    this.topBar = this.routeConfiguration.topBar;
    this.invoices = this.containsRoute('invoices');
    this.projects = this.containsRoute('projects');
  }

  private containsRoute(path: string): boolean{
    return this.routeConfiguration.routes.find(x => x.path == path) != null;
  }
}

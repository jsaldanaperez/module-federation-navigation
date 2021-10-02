import {Component, OnInit} from '@angular/core';
import {RoutingConfiguration} from "@module-federation-navigation/navigation";

@Component({
  selector: 'module-federation-navigation-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {
  invoices = false;
  constructor(private routeConfiguration: RoutingConfiguration) { }

  ngOnInit(): void {
    this.invoices = this.containsRoute('invoices');
  }

  private containsRoute(path: string): boolean{
    return this.routeConfiguration.routes.find(x => x.path == path) != null;
  }
}

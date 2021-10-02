import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoutingConfiguration} from "./routing-configuration";
import {RouterModule} from "@angular/router";
import { FrameComponent } from './frame/frame.component';
export const routeConfiguration = new RoutingConfiguration();

@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild([
      { path: '', component: FrameComponent, children: routeConfiguration.routes}
    ])
  ],
  declarations: [
    FrameComponent
  ],
  providers: [
    { provide: RoutingConfiguration, useValue: routeConfiguration}
  ]
})
export class NavigationModule {
}

import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoutingConfiguration} from "./routing-configuration";
import {RouterModule} from "@angular/router";
import { FrameComponent } from './frame/frame.component';
export const routingConfiguration = new RoutingConfiguration();


@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild([ 
      { path: '', component: FrameComponent, children: routingConfiguration.routes}
    ])
  ],
  declarations: [
    FrameComponent
  ],
  providers: [
    { provide: RoutingConfiguration, useValue: routingConfiguration}
  ]
})
export class NavigationModule {
}

import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { FrameComponent } from './frame/frame.component';
import { NavigationConfig } from './navigation-config';
export const navigationConfig = new NavigationConfig();


@NgModule({
  imports:[
    CommonModule,
    RouterModule.forChild([ 
      { path: '', component: FrameComponent, children: navigationConfig.routes}
    ])
  ],
  declarations: [
    FrameComponent
  ],
  providers: [
    { provide: NavigationConfig, useValue: navigationConfig}
  ]
})
export class NavigationModule {
}

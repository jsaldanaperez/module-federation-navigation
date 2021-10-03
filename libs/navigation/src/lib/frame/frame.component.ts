import {Component} from '@angular/core';
import { NavigationConfig, NavigationLink } from '../navigation-config';

@Component({
  selector: 'module-federation-navigation-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent {
  invoices = false;
  projects = false;
  navItems: NavigationLink[];

  constructor(navigationConfig: NavigationConfig) { 
    this.navItems = navigationConfig.navItems;
  }
}

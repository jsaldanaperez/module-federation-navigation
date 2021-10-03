import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {navigationConfig} from "@module-federation-navigation/navigation";

navigationConfig.initialize({
  topBar: import('topbar1/Module').then(m => m.RemoteEntryModule),
  navigationItems: [
    { name: 'Facturen', path: 'facturen', module: import('mfe1/Module').then((m) => m.RemoteEntryModule)},
    { name: 'Projecten', path: 'projecten', module: import('mfe2/Module').then((m) => m.RemoteEntryModule)}
  ]
})


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () => import('@module-federation-navigation/navigation').then(m => m.NavigationModule),
        }
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

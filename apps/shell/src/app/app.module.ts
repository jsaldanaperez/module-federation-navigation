import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LoadChildren, RouterModule} from '@angular/router';
import {NavigationModule, routeConfiguration} from "@module-federation-navigation/navigation";

function load(promise: Promise<any>): LoadChildren{
  return () => promise;
}

routeConfiguration.configure(
  {
    invoices: load(import('mfe1/Module').then((m) => m.RemoteEntryModule)),
  }
)


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () => import('@module-federation-navigation/navigation').then(m => m.NavigationModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

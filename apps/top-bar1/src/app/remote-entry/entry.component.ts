import { Component } from '@angular/core';

@Component({
  selector: 'module-federation-navigation-top-bar1-entry',
  template: `<div class="remote-entry" > top-bar1's</div>`,
  styles: [`
  .remote-entry {
    background-color: green;
    color: white;
    padding: 5px;
    height: 75px;
  }`]
})
export class RemoteEntryComponent {}
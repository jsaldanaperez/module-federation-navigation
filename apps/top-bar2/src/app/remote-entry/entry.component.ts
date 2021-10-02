import { Component } from '@angular/core';

@Component({
  selector: 'module-federation-navigation-top-bar2-entry',
  template: `<div class="remote-entry"><h2>top-bar2's</h2></div>`,
  styles: [`
  .remote-entry {
    border:1px solid black;
    background-color: yellow;
    color: blue;
    padding: 5px;
    height: 60px
  }`]
})
export class RemoteEntryComponent {}
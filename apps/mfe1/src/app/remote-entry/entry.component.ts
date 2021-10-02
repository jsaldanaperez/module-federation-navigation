import { Component } from '@angular/core';

@Component({
  selector: 'module-federation-navigation-mfe1-entry',
  template: `<div class="remote-entry">
    <h2>INVOICES</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}

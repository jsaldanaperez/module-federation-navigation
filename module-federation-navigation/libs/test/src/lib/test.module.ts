import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ListComponent } from './list/list.component';

export const testRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    { path: '', component: ListComponent}
  ])],
  declarations: [
    ListComponent
  ],
})
export class TestModule {}

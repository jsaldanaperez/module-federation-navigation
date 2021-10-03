import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

export class NavigationConfig {
    readonly routes: Routes = [];
    readonly navItems: NavigationLink[] = [];

    initialize(config: {
        topBar: Promise<NgModule>,
        navigationItems: { 
        name: string,
        path: string,
        module: Promise<NgModule>}[]}): void{

            if(config.topBar){
                this.routes.push({ path: '', loadChildren: () => config.topBar, outlet: 'topbar'})
            }

            if(config.navigationItems){
                config.navigationItems.forEach(navItem => {
                    this.routes.push( { path: navItem.path, loadChildren: () => navItem.module})
                    this.navItems.push({ name: navItem.name, route: navItem.path})
                })
            }
    }
}

export interface NavigationLink{
    name: string;
    route: string;
}

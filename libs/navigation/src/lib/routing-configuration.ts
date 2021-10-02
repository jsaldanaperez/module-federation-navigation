import {LoadChildren, Route, Routes} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class RoutingConfiguration{
  routes: Routes = [];
  topBar = false;

  configure(config :{
    topBar?: LoadChildren,
    invoices?: LoadChildren,
    projects?: LoadChildren
  }){
    if(config.topBar){
      this.topBar = true;
      this.routes.push({ path: '', loadChildren: config.topBar, outlet: 'top'});
    }

    if(config.invoices){
      this.routes.push({ path: 'invoices', loadChildren: config.invoices})
    }
    if(config.projects){
      this.routes.push({ path: 'projects', loadChildren: config.projects})
    }
  }
}

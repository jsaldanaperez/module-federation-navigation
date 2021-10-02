import {LoadChildren, Routes} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class RoutingConfiguration{
  routes: Routes = [];
  configure(config :{
    invoices?: LoadChildren,
    projects?: LoadChildren
  }){
    console.log('configure')
    if(config.invoices){
      this.routes.push({ path: 'invoices', loadChildren: config.invoices})
    }
    if(config.projects){
      this.routes.push({ path: 'projects', loadChildren: config.projects})
    }
  }
}

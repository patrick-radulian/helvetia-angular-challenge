import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ServersComponent } from "./servers/servers.component";

const routes: Routes = [{ path: "", component: ServersComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

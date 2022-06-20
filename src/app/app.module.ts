import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { FormsModule } from "@angular/forms";

import { ServerCardComponent } from "./server-card/server-card.component";
import { ServersComponent } from "./servers/servers.component";

@NgModule({
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, BrowserAnimationsModule, MaterialModule, FormsModule],
    declarations: [AppComponent, ServerCardComponent, ServersComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}

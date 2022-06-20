import { Component, OnInit, Input, OnChanges, SimpleChanges } from "@angular/core";
import { FormControl } from "@angular/forms";

import { Server } from "../servers/servers.component";
import validateNameLength from "../validators/name-length-validator";

@Component({
    selector: "app-server-card",
    templateUrl: "./server-card.component.html",
    styleUrls: ["./server-card.component.css"],
})
export class ServerCardComponent implements OnInit {
    @Input() server!: Server;
    @Input() shouldValidate!: boolean;

    serverLabel = new FormControl("", {
        validators: [validateNameLength],
        updateOn: "change",
    });

    constructor() {}

    ngOnInit(): void {
        this.serverLabel.setValue(this.server.label);
        this.serverLabel.markAsTouched();
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.serverLabel.setValidators(this.shouldValidate ? validateNameLength : null);
        this.serverLabel.updateValueAndValidity();
    }
}

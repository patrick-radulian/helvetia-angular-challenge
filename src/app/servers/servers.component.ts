import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { AbstractControl, FormControl, Validators } from "@angular/forms";

import { data } from "../../assets/data";

export type Server = {
    label: string;
    active: boolean;
};

type DataObject = {
    [key: string]: unknown | Server;
};

function getServers(obj: DataObject): Array<Server> {
    let arr: Array<Server> = [];

    for (let key of Object.keys(obj)) {
        if (key.toLowerCase() === "server") {
            arr = [...arr, obj[key] as Server];
        } else {
            if (!(obj[key] instanceof Object)) {
                continue;
            }

            arr = [...arr, ...getServers(obj[key] as DataObject)];
        }
    }

    return arr;
}

@Component({
    selector: "app-servers",
    templateUrl: "./servers.component.html",
    styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
    data = getServers(data);
    shouldValidate: boolean = true;

    constructor() {}

    ngOnInit(): void {}
}

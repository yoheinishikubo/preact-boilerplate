import * as Comlink from "comlink";

const worker = {
    value: null,
    async fetchValue(){}
};


Comlink.expose(worker);
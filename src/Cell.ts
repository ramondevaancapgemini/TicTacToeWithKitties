import { Player } from "./Player";

export class Cell {
    owner: Player | null;
    readonly link: string;

    constructor() {
        this.owner = null;
        this.link = Cell.getURL();
    }

    private static getURL() : string {
        var link = "http://thecatapi.com/api/images/get?format=src&type=gif";
        link += "&random=" + Math.floor(Math.random() * 100000) + 1;
        return link;
    }
}
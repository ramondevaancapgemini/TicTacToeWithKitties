export interface BarMan {
    getBier() : Bier;
}

export interface Bier {
    name : string;
}

export class Bar {
    constructor(private barMan : BarMan) {

    }

    getBier() : Bier {
        return this.barMan.getBier();
    }
}
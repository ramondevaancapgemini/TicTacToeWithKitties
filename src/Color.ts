export class Color {
    constructor(
        public red : number, 
        public green : number,
        public blue : Number,
        public alpha : Number
    ) {

    }

    public toString() : string {
        return "rgba(" + this.red + ", " + this.green + ", " + this.blue + ", " + this.alpha + ")";
    }
}
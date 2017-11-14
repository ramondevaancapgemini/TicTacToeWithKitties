import { TicTacToe } from "./TicTacToe";
import { Color } from "./Color";
import { Player } from "./Player";

export class Renderer {
    public readonly size : number;
    public readonly border : number;
    public readonly bgColor : Color;

    constructor(size : number, border : number, bgColor : Color) {
        this.size = size;
        this.border = border;
        this.bgColor = bgColor;
    }

    public render(game : TicTacToe, table: HTMLTableElement) : void {
        table.innerHTML = '';

        for(let i : number = 0; i < game.size; i++) {
            let row = table.insertRow();
            for(let j : number = 0; j < game.size; j++) {
                let cell = row.insertCell();
                cell.width = this.size + "";
                cell.height = this.size + "";
                let player : Player | null = game.getCellOwner(i, j);
                if(player == null) {
                    cell.bgColor = this.bgColor.toString();
                } else {
                    cell.bgColor = player.color.toString();
                    let link = game.getCellLink(i, j);
                    if(link != null) {
                        let img = document.createElement("img");
                        img.setAttribute("src",link);
                        img.setAttribute("width", (this.size - this.border) + "");
                        img.setAttribute("height", (this.size - this.border) + "");
                        cell.appendChild(img);
                        img.setAttribute("style", "margin-left: auto; margin-right: auto; display: block;");
                    }
                }
                let _this2 = this;
                cell.addEventListener("click", function() {
                    let done = game.set(i, j);
                    _this2.render(game, table);
                    if(done) {
                        let winner : Player | null = game.getWinner();
                        if(winner != null) {
                            alert("Winner: " + winner.name);
                        } else {
                            alert("No winner :(");
                        }
                        game.reset();
                        _this2.render(game, table);
                    }
                })
            }
        }
    }
}
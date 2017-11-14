import { TicTacToe } from "./TicTacToe";
import { Player } from "./Player";
import { Color } from "./Color";
import { Renderer } from "./Renderer";
import * as _ from "lodash";

var p1 = new Player("Player 1", new Color(255, 0, 0, 255));
var p2 = new Player("Player 2", new Color(0, 0, 255, 255));
let players : Player[] = [p1, p2];
var ttt = new TicTacToe(3, players);
let renderer : Renderer = new Renderer(250, 20, new Color(169, 169, 169, 255));

console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));

var gh = document.getElementById("gameholder");
if(gh != null) {
    console.log(gh);
    console.log("Success!");
    console.log(renderer == null);
    console.log(renderer);
    gh.innerHTML = '';
    renderer.render(ttt, <HTMLTableElement> gh);
} else {
    console.log("OR ELSE....");
}
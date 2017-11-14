import { Cell } from "./Cell";
import { Player } from "./Player";

export class TicTacToe {
    readonly size : number;
    readonly numPlayers : number;
    private cells : Cell[][];
    private players : Player[];
    private cur_player : number;

    private winner : Player | null;
    private ended : Boolean;

    constructor(size : number, players : Player[]) {
        this.size = size;
        this.numPlayers = players.length;
        this.players = players;
        this.cur_player = 0;

        this.reset();
    }

    reset() : void {
        this.ended = false;
        this.winner = null;
        this.cells = [];

        for(var i : number = 0; i < this.size; i++) {
            this.cells[i] = [];
            for(var j : number = 0; j < this.size; j++) {
                this.cells[i][j] = new Cell();
            }
        }
    }

    set(row : number, col : number) : Boolean {
        if(this.ended) {
            console.log("Ended");
            return true;
        }
        if(row >= this.size || col >= this.size) {
            console.log("Range 1");
            return false;
        }
        if(row < 0 || col < 0) {
            console.log("Range 2");
            return false;
        }
        if(this.cells[row][col].owner != null) {
            console.log("Owner set");
            return false;
        }
        this.cells[row][col].owner = this.players[this.cur_player];
        this.cur_player += 1;
        this.cur_player %= this.numPlayers;

        this.checkWinner();
        return this.ended;
    }

    private checkWinner() : void {
        //Check horizontal
        row: for(var i : number = 0; i < this.size; i++) {
            let player : Player | null = this.cells[i][0].owner;
            if(player == null) {
                continue;
            }
            for(var j : number = 1; j < this.size; j++) {
                if(this.cells[i][j].owner != player) {
                    continue row;
                }
            }
            
            this.ended = true;
            this.winner = player;

            return;
        }

        //Check vertical
        column: for(var i : number = 0; i < this.size; i++) {
            let player : Player | null = this.cells[0][i].owner;
            if(player == null) {
                continue;
            }
            for(var j : number = 1; j < this.size; j++) {
                if(this.cells[j][i].owner != player) {
                    continue column;
                }
            }
            
            this.ended = true;
            this.winner = player;

            return;
        }

        //Check diagonal 1
        diag1: {
            let player : Player | null = this.cells[0][0].owner;
            if(player == null) {
                break diag1;
            }
            for(var i : number = 0; i < this.size; i++) {
                if(this.cells[i][i].owner != player) {
                    break diag1;
                }
            }
            
            this.ended = true;
            this.winner = player;

            return;
        }

        //Check diagonal 2
        diag1: {
            let player : Player | null = this.cells[0][this.size - 1].owner;
            if(player == null) {
                break diag1;
            }
            for(var i : number = 0; i < this.size; i++) {
                if(this.cells[i][this.size - 1 - i].owner != player) {
                    break diag1;
                }
            }
            
            this.ended = true;
            this.winner = player;

            return;
        }
        
        //Check all cells filled
        for(var i : number = 0; i < this.size; i++) {
            for(var j : number = 1; j < this.size; j++) {
                if(this.cells[j][i].owner == null) {
                    return;
                }
            }
        }

        this.ended = true;
    }

    public getCellOwner(row : number, col : number) : Player | null {
        if(row >= this.size || col >= this.size) {
            return null;
        }
        if(row < 0 || col < 0) {
            return null;
        }
        return this.cells[row][col].owner;
    } 

    public getCellLink(row : number, col : number) : string | null {
        if(row >= this.size || col >= this.size) {
            return null;
        }
        if(row < 0 || col < 0) {
            return null;
        }
        return this.cells[row][col].link;
    } 

    public getWinner() : Player | null {
        return this.winner;
    }
}
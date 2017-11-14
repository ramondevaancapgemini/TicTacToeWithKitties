import 'mocha';
import {expect} from 'chai';
import { TicTacToe } from './TicTacToe';
import { Player } from './Player';
import { Color } from './Color';

describe('TicTacToeTest', () => {
    let p1 : Player;
    let p2 : Player;
    let ttt : TicTacToe;

    before(() => {
        p1 = new Player("Henk", new Color(255, 255, 255, 255));
        p2 = new Player("Wilbert", new Color(0, 0, 0, 255));
        ttt = new TicTacToe(3, [p1, p2]);
    })

    it('should have two players', function() {
        expect(ttt).property('numPlayers');
        expect(ttt.numPlayers).to.equal(2);
    });

    it('should have property numPlayers', function() {
        expect(ttt).property('numPlayers');
    });
});
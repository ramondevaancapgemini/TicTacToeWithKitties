import 'mocha';
import {expect} from 'chai';
import * as sinon from 'sinon';
import { Bar, BarMan, Bier } from './Lol';

describe('bierTest', () => {
    let bar : Bar;

    before(() => {
        let barMan : BarMan = {
            getBier() : Bier {
                return { name: "Hertog-Jan" };
            }
        };
        bar = new Bar(barMan);
    });

    it('should return Hertog-Jan', function() {
        expect(bar.getBier().name).to.equal("Hertog-Jan");
    });

    it('should return Jupiler', function () {
        let barMan2 = {
            getBier() : Bier {
                return {name:"geenBier"};
            }
        };
        let getBierFun = sinon.stub(barMan2, "getBier");
        getBierFun.onCall(0).returns("Jupiler");
        let bar2 : Bar = new Bar(barMan2);

        expect(bar2.getBier()).to.equal("Jupiler");
    })
});
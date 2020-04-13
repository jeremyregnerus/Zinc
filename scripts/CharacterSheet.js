import { ActorSheet5eCharacter } from '../../../systems/dnd5e/module/actor/sheets/character.js';

export class CharacterSheet extends ActorSheet5eCharacter {
    constructor(object, options) {
        super(object, options);

        console.log("%cZINC | Registered CharacterSheet", "color:red");
    };

    get template() {
        return 'modules/zinc/html/' + (!game.user.isGM && this.actor.limited ? 'LimitedSheet' : 'CharacterSheet') + '.html';
    }

    async _onConvertCurrency(event) {
        event.preventDefault();

        const curr = duplicate(this.actor.data.data.currency);
        const convert = {
            cp: { into: 'sp', each: 10 },
            sp: { into: 'gp', each: 10 },
            ep: { into: 'gp', each: 2 },
            pp: { into: 'gp', each: 0.1 }
        };

        for (let [c, t] of Object.entries(convert)) {
            let change = Math.floor(curr[c] / t.each);
            curr[c] -= (change * t.each);
            curr[t.into] += change;
        }

        return this.actor.update({ 'data.currency': curr });
    }
};
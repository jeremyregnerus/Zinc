import { ActorSheet5eNPC } from '../../../systems/dnd5e/module/actor/sheets/npc.js';

export class NPCSheet extends ActorSheet5eNPC {
    constructor(object, options) {
        super(object, options);

        console.log('%cZINC | Registered NPC Sheet', 'color:red');
    }
};
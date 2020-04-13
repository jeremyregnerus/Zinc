import { registerSettings } from './scripts/registerSettings.js';
import { updateStatusIcons } from './scripts/updateStatusIcons.js';

import { ActorSheet5eCharacter } from '../../systems/dnd5e/module/actor/sheets/character.js'
import { CharacterSheet } from './scripts/CharacterSheet.js';

import { ActorSheet5eNPC } from '../../systems/dnd5e/module/actor/sheets/npc.js'
import { NPCSheet } from './scripts/NPCSheet.js';

Hooks.once("init", async function () {
    console.log("%cZINC | Initializing Zinc Character Sheets", "color:red");

    registerSettings();
    updateStatusIcons();

    Actors.registerSheet('dnd5e', CharacterSheet, { types: ['character'], makeDefault: true });

    // TODO: create an NPC Sheet
    Actors.registerSheet('dnd5e', NPCSheet, { types: ['npc'], makeDefault: true });

    // TODO: create a race sheet / entity
    // TODO: create a background sheet / entity
    // TODO: create a class sheet / entity
    // TODO: create a feat sheet / entity

    // Items.unregisterSheet('dnd5e', ItemSheet5e);
    // TODO: create an items sheet
    // TODO: create a consumables sheet
    // TODO: create a 

    // TODO: loadTemplates
});

Hooks.once("ready", function () {
    Actors.unregisterSheet('dnd5e', ActorSheet5eCharacter);
    Actors.unregisterSheet('dnd5e', ActorSheet5eNPC);

    // TODO: May need to handle migrations here.
});
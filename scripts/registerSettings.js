export const registerSettings = function () {

    // Register Maximize Critical Dice setting
    game.settings.register("zinc", "maximizeCriticalDice", {
        name: "Maximize Critical Dice (NOT YET IMPLEMENTED)",
        hint: "Critical damage maximizes the additional dice that are rolled as part of the critical attack.",
        scope: "world",
        config: true,
        default: true,
        type: Boolean
    });

    game.settings.register("zinc", "showStandardActions", {
        name: "Display Standard Actions (NOT YET IMPLEMENTED)",
        hint: "Displays each of the standard action types for reference, ie. Attack, Cast a Spell, Dash, etc.",
        scope: "world",
        config: true,
        default: true,
        type: Boolean
    });
};
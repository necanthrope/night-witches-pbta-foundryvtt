/**
 * Define a set of template paths to pre-load
 */
export const preloadHandlebarsTemplates = async function () {
    return loadTemplates([
        'modules/night-witches-pbta-foundryvtt/templates/sheets/actor-sheet.hbs',
        'modules/night-witches-pbta-foundryvtt/templates/parts/actor-attributes.hbs',
        'modules/night-witches-pbta-foundryvtt/templates/parts/actor-description.hbs',
        'modules/night-witches-pbta-foundryvtt/templates/parts/actor-header.hbs',
        'modules/night-witches-pbta-foundryvtt/templates/parts/actor-inventory.hbs',
        'modules/night-witches-pbta-foundryvtt/templates/parts/actor-movelist.hbs',
        'modules/night-witches-pbta-foundryvtt/templates/parts/actor-moves.hbs',
        'modules/night-witches-pbta-foundryvtt/templates/parts/actor-stats.hbs',
    ]);

};

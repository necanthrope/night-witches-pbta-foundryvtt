export function NightWitchesActorSheetMixin(Base) {
	return class NightWitchesActorSheet extends Base {

        static get defaultOptions() {
            // console.log("default options");
            // console.log(super.defaultOptions);
            return mergeObject(super.defaultOptions, {
                // width: 850,
                // height: 900,
            });
        }

        /** @override */
        get template() {
            return 'modules/night-witches-pbta-foundryvtt/templates/sheets/actor-sheet.hbs';
        }

		/** @override */
		// async getData() {
		// 	const context = await super.getData();
		// 	return context;
		// }
	}
}

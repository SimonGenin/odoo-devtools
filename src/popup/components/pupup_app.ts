import { Component, tags } from "@odoo/owl";

const TEMPLATE = tags.xml/*xml*/ `
    <div t-name="PopUpApp">
        <header class="flex justify-center items-baseline mt-4">
            <img class="h-12" src="../assets/images/odoo_logo.png" />
        </header>              

        <div class="mt-4 bg-gray-100">
            <div class="p-4">
                <h1 class="text-2xl">Debug mode</h1>
                <div class="flex justify-around items-center mt-2">
                    <button class="px-4 py-2 uppercase font-bold text-sm rounded" t-attf-class="{{ currentMode === 'PROD' ? activeClasses : nonActiveClasses }}" type="button">Prod</button>
                    <button class="px-4 py-2 uppercase font-bold text-sm rounded" t-attf-class="{{ currentMode === 'TESTS' ? activeClasses : nonActiveClasses }}" type="button">Tests</button>
                    <button class="px-4 py-2 uppercase font-bold text-sm rounded" t-attf-class="{{ currentMode === 'ASSETS' ? activeClasses : nonActiveClasses }}" type="button">Assets</button>
                </div>
            </div>
        </div>

    </div>
`;

export class PopUpApp extends Component {
    static template = TEMPLATE;

    static modes = ["PROD", "TESTS", "ASSETS"];
    static defaultMode = "PROD";

    activeClasses = "bg-primary cursor-not-allowed text-white"
    nonActiveClasses = "bg-primary-200 hover:bg-primary-300"

    currentMode: string = PopUpApp.defaultMode
}

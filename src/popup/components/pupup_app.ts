import { Component, tags, useState } from "@odoo/owl";

const TEMPLATE = tags.xml/*xml*/ `
    <div t-name="PopUpApp">
        <header class="flex justify-center items-baseline mt-4">
            <img class="h-12" src="../assets/images/odoo_logo.png" />
        </header>              

        <div class="mt-4 bg-gray-100">
            <div class="p-4">
                <h1 class="text-2xl">Debug mode</h1>
                <div class="flex justify-around items-center mt-2">
                    <button t-on-click="onChangeDebugMode('0')" class="px-4 py-2 uppercase font-bold text-sm rounded" t-attf-class="{{ state.currentMode === 'PROD' ? activeClasses : nonActiveClasses }}" type="button">Prod</button>
                    <button t-on-click="onChangeDebugMode('tests')" class="px-4 py-2 uppercase font-bold text-sm rounded" t-attf-class="{{ state.currentMode === 'TESTS' ? activeClasses : nonActiveClasses }}" type="button">Tests</button>
                    <button t-on-click="onChangeDebugMode('assets')" class="px-4 py-2 uppercase font-bold text-sm rounded" t-attf-class="{{ state.currentMode === 'ASSETS' ? activeClasses : nonActiveClasses }}" type="button">Assets</button>
                </div>
            </div>
        </div>

    </div>
`;

export class PopUpApp extends Component {
    static template = TEMPLATE;

    activeClasses = "bg-primary cursor-not-allowed text-white";
    nonActiveClasses = "bg-primary-200 hover:bg-primary-300";

    state = useState({
        currentMode: "PROD"
    })

    setup() {
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
            console.log(request)
            if (request.data.message.action === "currentMode") {
                this.state.currentMode = request.data.message.value.toUpperCase();
            }
        });
    }
    
    mounted() {
        chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {
                message: {
                    action: "getCurrentMode",
                },
            });
        });
    }

    onChangeDebugMode(mode) {
        chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(activeTab.id, {
                message: {
                    action: "reload",
                    arg: "debug",
                    value: mode,
                },
            });
            this.state.currentMode = mode.toUpperCase();
        });
    }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message.action === "reload") {
        const url = new URL(window.location.href);
        url.searchParams.set(request.message.arg, request.message.value);
        window.history.replaceState({}, "", url.href);
        window.location.reload();
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message.action === "getCurrentMode") {
        const domAsString = document.documentElement.innerHTML
            .replace(/\n/g, "")
            .replace(/\\/g, "");
        const res = domAsString.match(`debug\s*:.?\s*.(?<mode>assets|tests).`);
        let value = "prod";
        if (res && res["groups"]) value = res["groups"]["mode"];
        chrome.runtime.sendMessage(
            {
                data: {
                    message: {
                        action: "currentMode",
                        value: value,
                    },
                },
            },
            function (response) {
                console.log(response);
            }
        );
    }
});

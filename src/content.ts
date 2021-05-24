function detectOdoo() {
    return "odoo" in window;
}


let times = 0;
while (!detectOdoo() && times < 10) {
    setTimeout(() => {}, 100)
    times++;
}

if (detectOdoo) {
    console.log("Odoo has been detected on this page.");
}
else {
    console.log("No odoo...");
}

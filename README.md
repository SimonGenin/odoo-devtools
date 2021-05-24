# Odoo Chrome extension

This app contains the code for a chrome extensions. 
It is separated into the popup app and the devtools app. 

## Install

```bash
git clone https://github.com/SimonGenin/OWL-Devtools-Extension
```

```bash
npm install
```

```bash
npm run dev
```
or 
```bash
npm run watch
```

For production:
```bash
npm run build
```

To run the extension, go to your chrome extensions admin panel and click on `Charger l'extension non empaquetée`.
Select your build folder (generated by rollup) and that's it, your extension is active! 
There is a convenient refresh button on the extension card (still on the same admin page) to update your code. 
Note you may have to open another window to see it working.

## Roadmap
Tour Builder
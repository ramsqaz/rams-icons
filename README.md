# How to create new Icon Components By Their Svgs

1. Download svg files that you need and import it in svg file
2. Create your own new config(you can dublicate some of them)
3. Make sure that you changed all fill, stroke, color values to currentColor, or you can add the colors that you met on your svg files and add it to 'app/settings/common.config.cjs' on object 'replaceAttrValues', it helps to controll icon color by props in the future:

```json
replaceAttrValues: {
    '#6C6D6D': 'currentColor',
    //you can add your own colors that you want to change to currentColor
},
```

4. Change parameters:

```javascript
const outDir = BaseDir + "/iconly/curved/solid"; // where u want to save transformed icon components
const dirPrefix = "IcCur"; //prefix for Icon Name for fast access by directory
const solid = true; //false if outlined
```

5. Run this code to cmd

```console
npx @svgr/cli --config-file <path-to-config-file> <path to where saved your svg files>
```

6. Create index file on your folder and export your icon components:

```javascript
export * from "./outlined";
export * from "./solid";
```

7. Add export to index file of icons:

```javascript
export * from "./iconly";
```

8. Build and publish:

```console
yarn build
yarn publish
```

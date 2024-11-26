# How to create new Icon Components By Their Svgs

1. Download svg files that you need and import it in svg file
2. Create your own new config(you can dublicate some of them)
3. Change parameters:

```javascript
const outDir = BaseDir + "/iconly/curved/solid"; // where u want to save transformed icon components
const dirPrefix = "IcCur"; //prefix for Icon Name for fast access by directory
const solid = true; //false if outlined
```

4. Run this code to cmd

```console
npx @svgr/cli --config-file <path-to-config-file> <path to where saved your svg files>
```

5. Create index file on your folder and export your icon components:

```javascript
export * from "./outlined";
export * from "./solid";
```

6. Add export to index file of icons

```javascript
export * from "./iconly";
```

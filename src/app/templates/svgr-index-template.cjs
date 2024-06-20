const path = require("path")
const svgrIndexCreator = (prefix, solid) => {
    return (filePaths)  => {
        const exportEntries = filePaths.map(({ path: filePath }) => {
            const basename = path.basename(filePath, path.extname(filePath))
            const exportName = prefix + (solid ? "Fill" : "") + basename
            return `export { default as ${exportName} } from './${basename}'`
        })
        return exportEntries.join('\n')
    }
}

module.exports = {
    svgrIndexCreator
}





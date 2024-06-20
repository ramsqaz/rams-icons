const {common_settings, BaseDir} = require("./common.config.cjs");
const {svgrTemplateCreator} = require("../templates/svgr-template.cjs");
const {svgrIndexCreator} = require("../templates/svgr-index-template.cjs");

const outDir = BaseDir + '/files/outlined';
const dirPrefix = 'Fl'
const solid = false


module.exports = {
    outDir,
    ...common_settings,
    indexTemplate: svgrIndexCreator(dirPrefix, solid),
    template: svgrTemplateCreator(dirPrefix, solid),
};

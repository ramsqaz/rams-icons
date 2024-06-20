const {common_settings, BaseDir} = require("./common.config.cjs");
const {svgrIndexCreator} = require("../templates/svgr-index-template.cjs");
const {svgrTemplateCreator} = require("../templates/svgr-template.cjs");

const outDir = BaseDir + '/general/solid';
const dirPrefix = 'Gn'
const solid = true


module.exports = {
    outDir,
    ...common_settings,
    indexTemplate: svgrIndexCreator(dirPrefix, solid),
    template: svgrTemplateCreator(dirPrefix, solid),
};

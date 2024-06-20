const {common_settings, BaseDir} = require("./common.config.cjs");
const {svgrTemplateCreator} = require("../templates/svgr-template.cjs");
const {svgrIndexCreator} = require("../templates/svgr-index-template.cjs");

const outDir = BaseDir + '/interface/solid';
const dirPrefix = 'In'
const solid = true


module.exports = {
    outDir,
    ...common_settings,
    indexTemplate: svgrIndexCreator(dirPrefix, solid),
    template: svgrTemplateCreator(dirPrefix, solid),
};

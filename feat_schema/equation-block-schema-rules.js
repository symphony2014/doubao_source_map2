// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'docBlockTypeConstants'
// - Resolved require(433991) to 'doc-block-type-constants'
// - Renamed variable 'a' to 'docxTextSchemaValidator'
// - Resolved require(458664) to 'docx-text-schema-validator'
// - Updated imported property 'bu' to 'blockTypeConstants' (module 433991)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: feat_schema.e09e7e82.js
         * chunkId: 99280
         * moduleId: 272441
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxTextSchemaValidator = require("docx-text-schema-validator") /*id: 458664*/;
  let o = [{
    blockType: docBlockTypeConstants.blockTypeConstants.EQUATION,
    getSchemaRule: () => docxTextSchemaValidator.apoolRule,
    getSchemaValidator: () => docxTextSchemaValidator.textValidator
  }];
  exports.default = o;
  require.r(exports);
}
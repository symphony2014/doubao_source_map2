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
         * moduleId: 347465
         */
module.exports = function (module, exports, require) {
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var docxTextSchemaValidator = require("docx-text-schema-validator") /*id: 458664*/;
  let o = [{
    blockType: docBlockTypeConstants.blockTypeConstants.HEADING1,
    getSchemaRule: () => docxTextSchemaValidator.apoolRule,
    getSchemaValidator: () => docxTextSchemaValidator.textValidator
  }, {
    blockType: docBlockTypeConstants.blockTypeConstants.HEADING2,
    getSchemaRule: () => docxTextSchemaValidator.apoolRule,
    getSchemaValidator: () => docxTextSchemaValidator.textValidator
  }, {
    blockType: docBlockTypeConstants.blockTypeConstants.HEADING3,
    getSchemaRule: () => docxTextSchemaValidator.apoolRule,
    getSchemaValidator: () => docxTextSchemaValidator.textValidator
  }, {
    blockType: docBlockTypeConstants.blockTypeConstants.HEADING4,
    getSchemaRule: () => docxTextSchemaValidator.apoolRule,
    getSchemaValidator: () => docxTextSchemaValidator.textValidator
  }, {
    blockType: docBlockTypeConstants.blockTypeConstants.HEADING5,
    getSchemaRule: () => docxTextSchemaValidator.apoolRule,
    getSchemaValidator: () => docxTextSchemaValidator.textValidator
  }, {
    blockType: docBlockTypeConstants.blockTypeConstants.HEADING6,
    getSchemaRule: () => docxTextSchemaValidator.apoolRule,
    getSchemaValidator: () => docxTextSchemaValidator.textValidator
  }, {
    blockType: docBlockTypeConstants.blockTypeConstants.HEADING7,
    getSchemaRule: () => docxTextSchemaValidator.apoolRule,
    getSchemaValidator: () => docxTextSchemaValidator.textValidator
  }, {
    blockType: docBlockTypeConstants.blockTypeConstants.HEADING8,
    getSchemaRule: () => docxTextSchemaValidator.apoolRule,
    getSchemaValidator: () => docxTextSchemaValidator.textValidator
  }, {
    blockType: docBlockTypeConstants.blockTypeConstants.HEADING9,
    getSchemaRule: () => docxTextSchemaValidator.apoolRule,
    getSchemaValidator: () => docxTextSchemaValidator.textValidator
  }];
  exports.default = o;
  require.r(exports);
}
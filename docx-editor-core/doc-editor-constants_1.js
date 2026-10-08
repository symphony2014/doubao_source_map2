// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'AQ' to 'blockTypeList'
// - Renamed export 'G6' to 'defaultMode'
// - Renamed export 'Nm' to 'directionTypes'
// - Renamed export 'Px' to 'updateFlags'
// - Renamed export 'yR' to 'headingProvider'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 8716.cb47e363.js
         * chunkId: 8716
         * moduleId: 2607
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var docxEditorCore = require("docx-editor-core") /*id: 135760*/;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  (r = {}).FORCE_UPDATE = "FORCE_UPDATE";
  let s = r;
  (o = {}).UP = "UP";
  o.DOWN = "DOWN";
  let c = o;
  let u = [docBlockTypeConstants.blockTypeConstants.PAGE, docBlockTypeConstants.blockTypeConstants.CALLOUT, docBlockTypeConstants.blockTypeConstants.TABLE, docBlockTypeConstants.blockTypeConstants.CELL, docBlockTypeConstants.blockTypeConstants.OBJECTIVE, docBlockTypeConstants.blockTypeConstants.KEY_RESULT, docBlockTypeConstants.blockTypeConstants.PROGRESS, docBlockTypeConstants.blockTypeConstants.SYNCED_SOURCE, docBlockTypeConstants.blockTypeConstants.SYNCED_REFERENCE];
  let d = "auto";
  let h = docxEditorCore.getProviderName("heading");
  require.d(exports, {
    blockTypeList: function () {
      return u;
    },
    defaultMode: function () {
      return d;
    },
    directionTypes: function () {
      return c;
    },
    updateFlags: function () {
      return s;
    },
    headingProvider: function () {
      return h;
    }
  });
}
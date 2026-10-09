// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'FM' to 'supportedSheetTypes'
// - Renamed export 'MO' to 'jumpModeConstants'
// - Renamed export 'Mu' to 'translatableBlockTypes'
// - Renamed export 'Pv' to 'whiteboardBlockTypes'
// - Renamed export 'Qs' to 'translationModeOptions'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74354.291a9885.js
         * chunkId: 74354
         * moduleId: 391959
         */
module.exports = function (module, exports, require) {
  var o;
  var i;
  var docBlockTypeConstants = require("doc-block-type-constants") /*id: 433991*/;
  var translationEnums = require("translation-enums") /*id: 421780*/;
  let u = [...docBlockTypeConstants.quoteBlockTypes, docBlockTypeConstants.blockTypeConstants.PAGE, docBlockTypeConstants.blockTypeConstants.OBJECTIVE, docBlockTypeConstants.blockTypeConstants.KEY_RESULT, docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_TITLE];
  docBlockTypeConstants.blockTypeConstants.OBJECTIVE;
  docBlockTypeConstants.blockTypeConstants.KEY_RESULT;
  docBlockTypeConstants.blockTypeConstants.AGENDA_ITEM_TITLE;
  (o = {})[o.NONE = 1] = "NONE";
  o[o.ONLY_TRANSLATION = 2] = "ONLY_TRANSLATION";
  o[o.WITH_ORIGINAL = 3] = "WITH_ORIGINAL";
  let a = o;
  (i = {}).JUMP_TO_TRANSLATE = "1";
  i.NOT_JUMP = "0";
  let s = i;
  translationEnums.resultCodes.EXIST;
  translationEnums.resultCodes.SEQUENCE_ERROR;
  let d = [docBlockTypeConstants.blockTypeConstants.SHEET, docBlockTypeConstants.blockTypeConstants.WHITEBOARD];
  let f = [docBlockTypeConstants.blockTypeConstants.SHEET];
  require.d(exports, {
    supportedSheetTypes: function () {
      return f;
    },
    jumpModeConstants: function () {
      return s;
    },
    translatableBlockTypes: function () {
      return u;
    },
    whiteboardBlockTypes: function () {
      return d;
    },
    translationModeOptions: function () {
      return a;
    }
  });
}
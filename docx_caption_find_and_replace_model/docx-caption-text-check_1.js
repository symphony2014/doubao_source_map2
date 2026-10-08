// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'isCaptionTextEmpty'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 289941
         */
module.exports = function (module, exports, require) {
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  var editorZoneState = require("editor-zone-state") /*id: 962363*/;
  var zeroConstantModule_1 = require("zero-constant-module_1") /*id: 885846*/;
  var docxCaptionTextCheck = require("docx-caption-text-check") /*id: 97477*/;
  let a = e => {
    if (!e || docxCaptionTextCheck.checkTextAttrs(e)) {
      return true;
    }
    let {
      initialAttributedTexts: i,
      apool: r
    } = e.text;
    let a = deltaSetChangesetConverter_1.attributedTextToDeltaSet(i, r).get(zeroConstantModule_1.versionValue);
    return new editorZoneState.EditorZoneState(zeroConstantModule_1.versionValue, a).isEmpty();
  };
  require.d(exports, {
    isCaptionTextEmpty: function () {
      return a;
    }
  });
}
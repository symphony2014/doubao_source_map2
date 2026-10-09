// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'g' to 'convertAttributedTextToDelta'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 917517
         */
module.exports = function (module, exports, require) {
  var deltaSetChangesetConverter_1 = require("delta-set-changeset-converter_1") /*id: 193797*/;
  function o(e) {
    let {
      initialAttributedTexts: i,
      apool: r
    } = e.text;
    return deltaSetChangesetConverter_1.attributedTextToDeltaSet(i, r);
  }
  require.d(exports, {
    convertAttributedTextToDelta: function () {
      return o;
    }
  });
}
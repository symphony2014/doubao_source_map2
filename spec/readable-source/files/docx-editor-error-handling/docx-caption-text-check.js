// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'checkTextAttrs'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 74277.42240636.js
         * chunkId: 74277
         * moduleId: 97477
         */
module.exports = function (module, exports, require) {
  function n(e) {
    let {
      initialAttributedTexts: i,
      apool: r
    } = e.text;
    return !i.attribs || !i.text || !r.numToAttrib;
  }
  require.d(exports, {
    checkTextAttrs: function () {
      return n;
    }
  });
}
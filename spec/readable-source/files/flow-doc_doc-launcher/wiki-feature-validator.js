// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'isWikiIkEnabled'
// - Renamed export 'h' to 'isWikiMvEnabled'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 444446
         */
module.exports = function (module, exports, require) {
  var platformDocUtils = require("platform-doc-utils") /*id: 726907*/;
  var docxFeatureFlags = require("docx-feature-flags") /*id: 939543*/;
  function l(e) {
    return !!e.get("isInWiki") && !platformDocUtils.WZW() && docxFeatureFlags.isIkEnabled();
  }
  function a(e) {
    return !!e.get("isInWiki") && !platformDocUtils.WZW() && docxFeatureFlags.isMvEnabled();
  }
  require.d(exports, {
    isWikiIkEnabled: function () {
      return l;
    },
    isWikiMvEnabled: function () {
      return a;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'T' to 'validateEventNode'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 45425.95c4a6d3.js
         * chunkId: 45425
         * moduleId: 120741
         */
module.exports = function (module, exports, require) {
  var eventTestTraversal = require("event-test-traversal") /*id: 494410*/;
  var eventTestTraversalUtil = require("event-test-traversal-util") /*id: 725199*/;
  var textContentExtractor = require("text-content-extractor") /*id: 413007*/;
  function u(e, t) {
    let r = false;
    eventTestTraversal.traverseEventTests(e, function (e) {
      if ("value" in e && /\r?\n|\r/.test(e.value) || e.type === "break") {
        r = true;
        return eventTestTraversalUtil.traversalDefaultFlag;
      }
    });
    return (!e.depth || !!(e.depth < 3)) && !!textContentExtractor.getTextContent(e) && (!!t.options.setext || !!r);
  }
  require.d(exports, {
    validateEventNode: function () {
      return u;
    }
  });
}
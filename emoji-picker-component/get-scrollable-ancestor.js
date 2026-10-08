// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getScrollableAncestor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 167314
         */
module.exports = function (module, exports, require) {
  var getDocumentElement = require("get-document-element") /*id: 948257*/;
  var detectScrollableElement = require("detect-scrollable-element") /*id: 484147*/;
  var domNodeNameUtil = require("dom-node-name-util") /*id: 59771*/;
  var domTypeCheckers = require("dom-type-checkers") /*id: 966927*/;
  require.d(exports, {
    getScrollableAncestor: function () {
      return function e(t) {
        if (["html", "body", "#document"].indexOf(domNodeNameUtil.getNodeName(t)) >= 0) {
          return t.ownerDocument.body;
        } else if (domTypeCheckers.isHTMLElement(t) && detectScrollableElement.isScrollable(t)) {
          return t;
        } else {
          return e(getDocumentElement.getDocumentElement(t));
        }
      };
    }
  });
}
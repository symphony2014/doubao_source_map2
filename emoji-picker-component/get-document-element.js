// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getDocumentElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 948257
         */
module.exports = function (module, exports, require) {
  var domNodeNameUtil = require("dom-node-name-util") /*id: 59771*/;
  var domTypeCheckers = require("dom-type-checkers") /*id: 966927*/;
  function i(e) {
    if (domNodeNameUtil.getNodeName(e) === "html") {
      return e;
    } else {
      return e.assignedSlot || e.parentNode || (domTypeCheckers.isShadowRoot(e) ? e.host : null) || ((domTypeCheckers.isElement(e) ? e.ownerDocument : e.document) || window.document).documentElement;
    }
  }
  require.d(exports, {
    getDocumentElement: function () {
      return i;
    }
  });
}
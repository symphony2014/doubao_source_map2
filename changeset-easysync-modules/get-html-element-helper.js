// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getHtmlElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 53564
         */
module.exports = function (module, exports, require) {
  var domNodeNameUtil_1 = require("dom-node-name-util_1") /*id: 133237*/;
  var domElementTypeChecks = require("dom-element-type-checks") /*id: 158443*/;
  function o(t) {
    if (domNodeNameUtil_1.getNodeName(t) === "html") {
      return t;
    } else {
      return t.assignedSlot || t.parentNode || (domElementTypeChecks.isShadowRoot(t) ? t.host : null) || ((domElementTypeChecks.isElement(t) ? t.ownerDocument : t.document) || window.document).documentElement;
    }
  }
  require.d(exports, {
    getHtmlElement: function () {
      return o;
    }
  });
}
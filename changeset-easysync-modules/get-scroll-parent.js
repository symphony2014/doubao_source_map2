// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'getScrollParent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 968845
         */
module.exports = function (module, exports, require) {
  var getHtmlElementHelper = require("get-html-element-helper") /*id: 53564*/;
  var checkElementScrollable = require("check-element-scrollable") /*id: 83180*/;
  var domNodeNameUtil_1 = require("dom-node-name-util_1") /*id: 133237*/;
  var domElementTypeChecks = require("dom-element-type-checks") /*id: 158443*/;
  require.d(exports, {
    getScrollParent: function () {
      return function t(e) {
        if (["html", "body", "#document"].indexOf(domNodeNameUtil_1.getNodeName(e)) >= 0) {
          return e.ownerDocument.body;
        } else if (domElementTypeChecks.isHTMLElement(e) && checkElementScrollable.isElementScrollable(e)) {
          return e;
        } else {
          return t(getHtmlElementHelper.getHtmlElement(e));
        }
      };
    }
  });
}
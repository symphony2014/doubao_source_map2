// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isElementScrollable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 83180
         */
module.exports = function (module, exports, require) {
  var getWindowFromElement = require("get-window-from-element") /*id: 540463*/;
  function i(t) {
    var e = getWindowFromElement.getWindowFromElement(t).getComputedStyle(t);
    var n = e.overflow;
    var i = e.overflowX;
    var o = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + o + i);
  }
  require.d(exports, {
    isElementScrollable: function () {
      return i;
    }
  });
}
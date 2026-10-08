// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isScrollable'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 20536.778f9caf.js
         * chunkId: 20536
         * moduleId: 484147
         */
module.exports = function (module, exports, require) {
  var getWindowUtil = require("get-window-util") /*id: 374363*/;
  function r(e) {
    var t = getWindowUtil.getWindow(e).getComputedStyle(e);
    var n = t.overflow;
    var r = t.overflowX;
    var i = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + i + r);
  }
  require.d(exports, {
    isScrollable: function () {
      return r;
    }
  });
}
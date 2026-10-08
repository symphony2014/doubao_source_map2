// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'P' to 'createDebounce'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13032.fea06b08.js
         * chunkId: 13032
         * moduleId: 869149
         */
module.exports = function (module, exports, require) {
  var debounceUtil = require("debounce-util") /*id: 783084*/;
  function o(e, t, n) {
    var o = true;
    var r = true;
    if (typeof e != "function") {
      throw TypeError("Expected a function");
    }
    if (typeof n == "object") {
      o = "leading" in n ? !!n.leading : o;
      r = "trailing" in n ? !!n.trailing : r;
    }
    return debounceUtil.debounce(e, t, {
      leading: o,
      trailing: r,
      maxWait: t
    });
  }
  require.d(exports, {
    createDebounce: function () {
      return o;
    }
  });
}
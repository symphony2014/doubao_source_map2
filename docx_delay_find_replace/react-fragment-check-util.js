// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'isReactFragment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 11464.7f88d9c4.js
         * chunkId: 11464
         * moduleId: 996784
         */
module.exports = function (module, exports, require) {
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  var r = Symbol.for("react.element");
  var o = Symbol.for("react.transitional.element");
  var s = Symbol.for("react.fragment");
  function a(e) {
    return e && typeofHelper.getType(e) === "object" && (e.$$typeof === r || e.$$typeof === o) && e.type === s;
  }
  require.d(exports, {
    isReactFragment: function () {
      return a;
    }
  });
}
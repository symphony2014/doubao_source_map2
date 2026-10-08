// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'timerDelegate'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 521641
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers = require("typescript-runtime-helpers") /*id: 4100*/;
  var r = {
    setTimeout: function (e, t) {
      var n = [];
      var o = 2;
      for (; o < arguments.length; o++) {
        n[o - 2] = arguments[o];
      }
      var a = r.delegate;
      if (a == null ? undefined : a.setTimeout) {
        return a.setTimeout.apply(a, typescriptRuntimeHelpers.arraySpread([e, t], typescriptRuntimeHelpers.spreadArray(n)));
      } else {
        return setTimeout.apply(undefined, typescriptRuntimeHelpers.arraySpread([e, t], typescriptRuntimeHelpers.spreadArray(n)));
      }
    },
    clearTimeout: function (e) {
      var t = r.delegate;
      return ((t == null ? undefined : t.clearTimeout) || clearTimeout)(e);
    },
    delegate: undefined
  };
  require.d(exports, {
    timerDelegate: function () {
      return r;
    }
  });
}
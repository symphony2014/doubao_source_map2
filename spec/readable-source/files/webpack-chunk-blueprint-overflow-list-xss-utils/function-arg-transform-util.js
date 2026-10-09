// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'createArgTransformer'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 943340
         */
module.exports = function (module, exports, require) {
  var functionCallHelper = require("function-call-helper") /*id: 296477*/;
  var i = Math.max;
  exports.createArgTransformer = function (e, t, n) {
    t = i(t === undefined ? e.length - 1 : t, 0);
    return function () {
      var o = arguments;
      var a = -1;
      var s = i(o.length - t, 0);
      var u = Array(s);
      while (++a < s) {
        u[a] = o[t + a];
      }
      a = -1;
      var c = Array(t + 1);
      for (; ++a < t;) {
        c[a] = o[a];
      }
      c[t] = n(u);
      return functionCallHelper.callHelper(e, this, c);
    };
  };
}
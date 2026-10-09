// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'X' to 'memoizeFunction'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 851843
         */
module.exports = function (module, exports, require) {
  var arrayFindIndexMatcher = require("array-find-index-matcher") /*id: 489247*/;
  function r(t, e = 10) {
    var n = [];
    var r = [];
    return function () {
      var o = [];
      var a = 0;
      for (; a < arguments.length; a++) {
        o[a] = arguments[a];
      }
      var s = arrayFindIndexMatcher.findMatchingIndex(r, function (t) {
        return t && t.length === o.length && t.every(function (t, e) {
          return t === o[e];
        });
      });
      if (s >= 0) {
        return n[s];
      }
      if (n.length > e) {
        n.shift();
        r.shift();
      }
      var h = t.apply(null, o);
      n.push(h);
      r.push(o);
      return h;
    };
  }
  require.d(exports, {
    memoizeFunction: function () {
      return r;
    }
  });
}
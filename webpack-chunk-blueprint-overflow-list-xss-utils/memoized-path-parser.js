// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'stringToPath'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 214139
         */
module.exports = function (module, exports, require) {
  var r;
  var i;
  var o;
  var memoizeFunction = require("memoize-function") /*id: 565197*/;
  var s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var u = /\\(\\)?/g;
  r = function (e) {
    var t = [];
    if (e.charCodeAt(0) === 46) {
      t.push("");
    }
    e.replace(s, function (e, n, r, i) {
      t.push(r ? i.replace(u, "$1") : n || e);
    });
    return t;
  };
  o = (i = memoizeFunction.memoize(r, function (e) {
    if (o.size === 500) {
      o.clear();
    }
    return e;
  })).cache;
  var c = i;
  require.d(exports, {
    stringToPath: function () {
      return c;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'o' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 649434
         */
module.exports = function (module, exports, require) {
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var i = Math.floor;
  var a = functionBindFallback("".charAt);
  var u = functionBindFallback("".replace);
  var c = functionBindFallback("".slice);
  var f = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var s = /\$([$&'`]|\d{1,2})/g;
  module.exports = function (t, r, e, n, l, v) {
    var p = e + t.length;
    var h = n.length;
    var d = s;
    if (l !== undefined) {
      l = requireObjectNotNullish(l);
      d = f;
    }
    return u(v, d, function (o, u) {
      var f;
      switch (a(u, 0)) {
        case "$":
          return "$";
        case "&":
          return t;
        case "`":
          return c(r, 0, e);
        case "'":
          return c(r, p);
        case "<":
          f = l[c(u, 1, -1)];
          break;
        default:
          var s = +u;
          if (s === 0) {
            return o;
          }
          if (s > h) {
            var v = i(s / 10);
            if (v === 0) {
              return o;
            }
            if (v <= h) {
              if (n[v - 1] === undefined) {
                return a(u, 1);
              } else {
                return n[v - 1] + a(u, 1);
              }
            }
            return o;
          }
          f = n[s - 1];
      }
      if (f === undefined) {
        return "";
      } else {
        return f;
      }
    });
  };
}
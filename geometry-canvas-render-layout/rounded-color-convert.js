// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'colorConvert'
// - Resolved require(886055) to 'color-convert'
// - Renamed variable 'r' to 'colorConversionPathFinder'
// - Resolved require(60499) to 'color-conversion-path-finder'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 42711.f6013ca6.js
         * chunkId: 42711
         * moduleId: 910879
         */
module.exports = function (module, exports, require) {
  var colorConvert = require("color-convert") /*id: 886055*/;
  var colorConversionPathFinder = require("color-conversion-path-finder") /*id: 60499*/;
  var o = {};
  Object.keys(colorConvert).forEach(function (t) {
    o[t] = {};
    Object.defineProperty(o[t], "channels", {
      value: colorConvert[t].channels
    });
    Object.defineProperty(o[t], "labels", {
      value: colorConvert[t].labels
    });
    var e = colorConversionPathFinder(t);
    Object.keys(e).forEach(function (n) {
      var i;
      var r;
      var a = e[n];
      o[t][n] = (i = function (t) {
        if (t == null) {
          return t;
        }
        if (arguments.length > 1) {
          t = Array.prototype.slice.call(arguments);
        }
        var e = a(t);
        if (typeof e == "object") {
          var n = e.length;
          var i = 0;
          for (; i < n; i++) {
            e[i] = Math.round(e[i]);
          }
        }
        return e;
      }, "conversion" in a && (i.conversion = a.conversion), i);
      o[t][n].raw = (r = function (t) {
        if (t == null) {
          return t;
        } else {
          if (arguments.length > 1) {
            t = Array.prototype.slice.call(arguments);
          }
          return a(t);
        }
      }, "conversion" in a && (r.conversion = a.conversion), r);
    });
  });
  module.exports = o;
}
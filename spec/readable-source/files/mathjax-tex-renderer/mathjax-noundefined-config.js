// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'T' to 'mathjaxParserConfiguration'
// - Resolved require(947676) to 'mathjax-parser-configuration'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 863721
         */
module.exports = function (module, exports, require) {
  var r = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  exports.NoUndefinedConfiguration = undefined;
  var mathjaxParserConfiguration = require("mathjax-parser-configuration") /*id: 947676*/;
  exports.NoUndefinedConfiguration = mathjaxParserConfiguration.Configuration.create("noundefined", {
    fallback: {
      macro: function (t, e) {
        var Q;
        var T;
        var n = t.create("text", "\\" + e);
        var o = t.options.noundefined || {};
        var i = {};
        try {
          var a = r(["color", "background", "size"]);
          var u = a.next();
          for (; !u.done; u = a.next()) {
            var s = u.value;
            if (o[s]) {
              i["math" + s] = o[s];
            }
          }
        } catch (t) {
          Q = {
            error: t
          };
        } finally {
          try {
            if (u && !u.done && (T = a.return)) {
              T.call(a);
            }
          } finally {
            if (Q) {
              throw Q.error;
            }
          }
        }
        t.Push(t.create("node", "mtext", [], i, n));
      }
    },
    options: {
      noundefined: {
        color: "red",
        background: "",
        size: ""
      }
    },
    priority: 3
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
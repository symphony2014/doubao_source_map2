// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(135530) to 'date-format-util_1'
// - Resolved require(96732) to 'timezone-format-tokens'
// - Resolved require(43322) to 'parse-iso-date'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 552911
         */
module.exports = function (module, exports, require) {
  exports.default = function (e, t, n) {
    var o = String(t);
    var l = n || {};
    var u = o.match(s);
    if (u) {
      var d = i.default(e, l);
      o = u.reduce(function (e, t) {
        if (t[0] === "'") {
          return e;
        }
        var n = e.indexOf(t);
        var a = e[n - 1] === "'";
        var i = e.replace(t, "'" + r.default[t[0]](d, t, null, l) + "'");
        if (a) {
          return i.substring(0, n - 1) + i.substring(n + 1);
        } else {
          return i;
        }
      }, o);
    }
    return a.default(e, o, l);
  };
  var a = o(require("date-format-util_1") /*id: 135530*/);
  var r = o(require("timezone-format-tokens") /*id: 96732*/);
  var i = o(require("parse-iso-date") /*id: 43322*/);
  function o(e) {
    if (e && e.__esModule) {
      return e;
    } else {
      return {
        default: e
      };
    }
  }
  var s = /([xXOz]+)|''|'(''|[^'])+('|$)/g;
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
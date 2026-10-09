// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(694858) to 'safe-assign-wrapper'
// - Resolved require(43322) to 'parse-iso-date'
// - Resolved require(326615) to 'timezone-suffix-regex'
// - Resolved require(877320) to 'timezone-offset-util'
// - Resolved require(336563) to 'create-utc-date'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 999468
         */
module.exports = function (module, exports, require) {
  exports.default = function (e, t, n) {
    if (typeof e == "string" && !e.match(i.default)) {
      var l = a.default(n);
      l.timeZone = t;
      return r.default(e, l);
    }
    var u = r.default(e, n);
    var d = s.default(u.getFullYear(), u.getMonth(), u.getDate(), u.getHours(), u.getMinutes(), u.getSeconds(), u.getMilliseconds()).getTime();
    var c = o.default(t, new Date(d));
    return new Date(d + c);
  };
  var a = l(require("safe-assign-wrapper") /*id: 694858*/);
  var r = l(require("parse-iso-date") /*id: 43322*/);
  var i = l(require("timezone-suffix-regex") /*id: 326615*/);
  var o = l(require("timezone-offset-util") /*id: 877320*/);
  var s = l(require("create-utc-date") /*id: 336563*/);
  function l(e) {
    if (e && e.__esModule) {
      return e;
    } else {
      return {
        default: e
      };
    }
  }
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(877320) to 'timezone-offset-util'
// - Resolved require(43322) to 'parse-iso-date'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 64783
         */
module.exports = function (module, exports, require) {
  exports.default = function (e, t, n) {
    var i = r.default(e, n);
    var o = a.default(t, i, true);
    var s = new Date(i.getTime() - o);
    var l = new Date(0);
    l.setFullYear(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate());
    l.setHours(s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), s.getUTCMilliseconds());
    return l;
  };
  var a = i(require("timezone-offset-util") /*id: 877320*/);
  var r = i(require("parse-iso-date") /*id: 43322*/);
  function i(e) {
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
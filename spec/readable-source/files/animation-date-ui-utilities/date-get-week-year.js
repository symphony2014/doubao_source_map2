// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(728393) to 'to-date-util'
// - Resolved require(529193) to 'validate-arg-count'
// - Resolved require(4557) to 'date-start-of-week_1'
// - Resolved require(546552) to 'utils-to-integer'
// - Renamed variable 'l' to 'defaultOptionsManager'
// - Resolved require(613388) to 'default-options-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 214639
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = function (e, t) {
    i.default(1, arguments);
    var c;
    var f;
    var g = r.default(e);
    var m = g.getUTCFullYear();
    var v = defaultOptionsManager.getDefaultOptions();
    var y = s.default((t == null ? undefined : t.firstWeekContainsDate) ?? (t == null ? undefined : (c = t.locale) === null || c === undefined ? undefined : c.options?.firstWeekContainsDate) ?? v.firstWeekContainsDate ?? ((f = v.locale) === null || f === undefined ? undefined : f.options?.firstWeekContainsDate) ?? 1);
    if (!(y >= 1) || !(y <= 7)) {
      throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    }
    var T = new Date(0);
    T.setUTCFullYear(m + 1, 0, y);
    T.setUTCHours(0, 0, 0, 0);
    var b = o.default(T, t);
    var w = new Date(0);
    w.setUTCFullYear(m, 0, y);
    w.setUTCHours(0, 0, 0, 0);
    var _ = o.default(w, t);
    if (g.getTime() >= b.getTime()) {
      return m + 1;
    } else if (g.getTime() >= _.getTime()) {
      return m;
    } else {
      return m - 1;
    }
  };
  var r = a(require("to-date-util") /*id: 728393*/);
  var i = a(require("validate-arg-count") /*id: 529193*/);
  var o = a(require("date-start-of-week_1") /*id: 4557*/);
  var s = a(require("utils-to-integer") /*id: 546552*/);
  var defaultOptionsManager = require("default-options-manager") /*id: 613388*/;
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
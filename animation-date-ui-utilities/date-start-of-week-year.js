// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(214639) to 'date-get-week-year'
// - Resolved require(529193) to 'validate-arg-count'
// - Resolved require(4557) to 'date-start-of-week_1'
// - Resolved require(546552) to 'utils-to-integer'
// - Renamed variable 'l' to 'defaultOptionsManager'
// - Resolved require(613388) to 'default-options-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 199663
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = function (e, t) {
    i.default(1, arguments);
    var c;
    var f;
    var g = defaultOptionsManager.getDefaultOptions();
    var m = s.default((t == null ? undefined : t.firstWeekContainsDate) ?? (t == null ? undefined : (c = t.locale) === null || c === undefined ? undefined : c.options?.firstWeekContainsDate) ?? g.firstWeekContainsDate ?? ((f = g.locale) === null || f === undefined ? undefined : f.options?.firstWeekContainsDate) ?? 1);
    var v = r.default(e, t);
    var y = new Date(0);
    y.setUTCFullYear(v, 0, m);
    y.setUTCHours(0, 0, 0, 0);
    return o.default(y, t);
  };
  var r = a(require("date-get-week-year") /*id: 214639*/);
  var i = a(require("validate-arg-count") /*id: 529193*/);
  var o = a(require("date-start-of-week_1") /*id: 4557*/);
  var s = a(require("utils-to-integer") /*id: 546552*/);
  var defaultOptionsManager = require("default-options-manager") /*id: 613388*/;
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
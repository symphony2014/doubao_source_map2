// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(728393) to 'to-date-util'
// - Resolved require(529193) to 'validate-arg-count'
// - Resolved require(546552) to 'utils-to-integer'
// - Renamed variable 's' to 'defaultOptionsManager'
// - Resolved require(613388) to 'default-options-manager'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 4557
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = function (e, t) {
    i.default(1, arguments);
    var d;
    var h;
    var p = defaultOptionsManager.getDefaultOptions();
    var g = o.default((t == null ? undefined : t.weekStartsOn) ?? (t == null ? undefined : (d = t.locale) === null || d === undefined ? undefined : d.options?.weekStartsOn) ?? p.weekStartsOn ?? ((h = p.locale) === null || h === undefined ? undefined : h.options?.weekStartsOn) ?? 0);
    if (!(g >= 0) || !(g <= 6)) {
      throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
    }
    var m = r.default(e);
    var v = m.getUTCDay();
    m.setUTCDate(m.getUTCDate() - ((v < g) * 7 + v - g));
    m.setUTCHours(0, 0, 0, 0);
    return m;
  };
  var r = a(require("to-date-util") /*id: 728393*/);
  var i = a(require("validate-arg-count") /*id: 529193*/);
  var o = a(require("utils-to-integer") /*id: 546552*/);
  var defaultOptionsManager = require("default-options-manager") /*id: 613388*/;
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(299302) to 'es-module-interop-helper_2'
// - Resolved require(673501) to 'locale-time-duration-format'
// - Resolved require(564885) to 'date-time-format-config'
// - Resolved require(934673) to 'date-locale-relative-format'
// - Resolved require(846949) to 'en-us-date-locale'
// - Resolved require(22392) to 'date-locale-parser-config'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 543533
         */
module.exports = function (module, exports, require) {
  var a = require("es-module-interop-helper_2") /*id: 299302*/.default;
  exports.default = undefined;
  var r = a(require("locale-time-duration-format") /*id: 673501*/);
  var i = a(require("date-time-format-config") /*id: 564885*/);
  var o = a(require("date-locale-relative-format") /*id: 934673*/);
  var s = a(require("en-us-date-locale") /*id: 846949*/);
  var l = a(require("date-locale-parser-config") /*id: 22392*/);
  var u = {
    code: "en-US",
    formatDistance: r.default,
    formatLong: i.default,
    formatRelative: o.default,
    localize: s.default,
    match: l.default,
    options: {
      weekStartsOn: 0,
      firstWeekContainsDate: 1
    }
  };
  exports.default = u;
  module.exports = exports.default;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}
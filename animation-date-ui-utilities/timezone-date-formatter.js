// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(694858) to 'safe-assign-wrapper'
// - Resolved require(552911) to 'timezone-date-format-util'
// - Resolved require(64783) to 'iso-date-utc-converter'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 50072.1e2f7f4a.js
         * chunkId: 50072
         * moduleId: 78287
         */
module.exports = function (module, exports, require) {
  exports.default = function (e, t, n, o) {
    var s = a.default(o);
    s.timeZone = t;
    return r.default(i.default(e, t), n, s);
  };
  var a = o(require("safe-assign-wrapper") /*id: 694858*/);
  var r = o(require("timezone-date-format-util") /*id: 552911*/);
  var i = o(require("iso-date-utc-converter") /*id: 64783*/);
  function o(e) {
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
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'H' to 'timestampToDate'
// - Renamed export 'T' to 'parseTimestampInt'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: read-pdf-skill-guidance-page-v2.2be10363.js
         * chunkId: 92219
         * moduleId: 37495
         */
module.exports = function (module, exports, require) {
  var isStringTypeCheck = require("is-string-type-check") /*id: 253558*/;
  let r = e => isStringTypeCheck.isString(e) ? parseInt(e, 10) || undefined : e;
  let s = e => {
    let t = r(e);
    if (t) {
      return new Date(t * 1000);
    } else {
      return undefined;
    }
  };
  require.d(exports, {
    timestampToDate: function () {
      return s;
    },
    parseTimestampInt: function () {
      return r;
    }
  });
}
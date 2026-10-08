// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'm' to 'sanitizeContent'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 51369.a0f1843b.js
         * chunkId: 51369
         * moduleId: 37494
         */
module.exports = function (module, exports, require) {
  var dompurifySanitizerLoader = require("dompurify-sanitizer-loader") /*id: 724018*/;
  var l = dompurifySanitizerLoader;
  let i = (e, t) => l.sanitize ? l.sanitize(e, t) : e;
  require.d(exports, {
    sanitizeContent: function () {
      return i;
    }
  });
}
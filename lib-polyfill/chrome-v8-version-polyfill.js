// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'a' to 'userAgentStringExtractor'
// - Resolved require(856124) to 'user-agent-string-extractor'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 45469
         */
module.exports = function (module, exports, require) {
  var n;
  var o;
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var userAgentStringExtractor = require("user-agent-string-extractor") /*id: 856124*/;
  var u = globalObjectPolyfill.process;
  var c = globalObjectPolyfill.Deno;
  var f = u && u.versions || c && c.version;
  var s = f && f.v8;
  if (s) {
    o = (n = s.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1]);
  }
  if (!o && userAgentStringExtractor && (!(n = userAgentStringExtractor.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = userAgentStringExtractor.match(/Chrome\/(\d+)/))) {
    o = +n[1];
  }
  module.exports = o;
}
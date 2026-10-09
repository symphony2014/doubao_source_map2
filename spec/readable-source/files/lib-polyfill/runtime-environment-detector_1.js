// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'globalObjectPolyfill'
// - Resolved require(515719) to 'global-object-polyfill'
// - Renamed variable 'o' to 'userAgentStringExtractor'
// - Resolved require(856124) to 'user-agent-string-extractor'
// - Renamed variable 'i' to 'objectTypeDetector'
// - Resolved require(942172) to 'object-type-detector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 279839
         */
module.exports = function (module, exports, require) {
  var globalObjectPolyfill = require("global-object-polyfill") /*id: 515719*/;
  var userAgentStringExtractor = require("user-agent-string-extractor") /*id: 856124*/;
  var objectTypeDetector = require("object-type-detector") /*id: 942172*/;
  function a(t) {
    return userAgentStringExtractor.slice(0, t.length) === t;
  }
  module.exports = a("Bun/") ? "BUN" : a("Cloudflare-Workers") ? "CLOUDFLARE" : a("Deno/") ? "DENO" : a("Node.js/") ? "NODE" : globalObjectPolyfill.Bun && typeof Bun.version == "string" ? "BUN" : globalObjectPolyfill.Deno && typeof Deno.version == "object" ? "DENO" : objectTypeDetector(globalObjectPolyfill.process) === "process" ? "NODE" : globalObjectPolyfill.window && globalObjectPolyfill.document ? "BROWSER" : "REST";
}
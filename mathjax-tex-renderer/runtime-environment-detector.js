// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'getGlobalObject'
// - Resolved require(780500) to 'get-global-object'
// - Renamed variable 'T' to 'getUserAgentString'
// - Resolved require(951061) to 'get-user-agent-string'
// - Renamed variable 'n' to 'getObjectTypeString'
// - Resolved require(32151) to 'get-object-type-string'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 534570
         */
module.exports = function (module, exports, require) {
  var getGlobalObject = require("get-global-object") /*id: 780500*/;
  var getUserAgentString = require("get-user-agent-string") /*id: 951061*/;
  var getObjectTypeString = require("get-object-type-string") /*id: 32151*/;
  function o(t) {
    return getUserAgentString.slice(0, t.length) === t;
  }
  module.exports = o("Bun/") ? "BUN" : o("Cloudflare-Workers") ? "CLOUDFLARE" : o("Deno/") ? "DENO" : o("Node.js/") ? "NODE" : getGlobalObject.Bun && typeof Bun.version == "string" ? "BUN" : getGlobalObject.Deno && typeof Deno.version == "object" ? "DENO" : getObjectTypeString(getGlobalObject.process) === "process" ? "NODE" : getGlobalObject.window && getGlobalObject.document ? "BROWSER" : "REST";
}
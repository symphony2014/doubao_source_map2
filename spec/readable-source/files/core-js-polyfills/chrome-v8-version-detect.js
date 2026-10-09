// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'getGlobalObject'
// - Resolved require(780500) to 'get-global-object'
// - Renamed variable 'u' to 'getUserAgentString'
// - Resolved require(951061) to 'get-user-agent-string'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 968349
         */
module.exports = function (module, exports, require) {
  var e;
  var o;
  var getGlobalObject = require("get-global-object") /*id: 780500*/;
  var getUserAgentString = require("get-user-agent-string") /*id: 951061*/;
  var c = getGlobalObject.process;
  var s = getGlobalObject.Deno;
  var f = c && c.versions || s && s.version;
  var a = f && f.v8;
  if (a) {
    o = (e = a.split("."))[0] > 0 && e[0] < 4 ? 1 : +(e[0] + e[1]);
  }
  if (!o && getUserAgentString && (!(e = getUserAgentString.match(/Edge\/(\d+)/)) || e[1] >= 74) && (e = getUserAgentString.match(/Chrome\/(\d+)/))) {
    o = +e[1];
  }
  module.exports = o;
}
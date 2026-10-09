// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'processBrowserShim'
// - Resolved require(488992) to 'process-browser-shim'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 82855.5dc766e7.js
         * chunkId: 82855
         * moduleId: 824816
         */
module.exports = function (module, exports, require) {
  var processBrowserShim = require("process-browser-shim") /*id: 488992*/;
  (function () {
    var t;
    var n;
    var o;
    var r;
    if (typeof performance != "undefined" && performance !== null && performance.now) {
      module.exports = function () {
        return performance.now();
      };
    } else if (processBrowserShim != null && processBrowserShim.hrtime) {
      module.exports = function () {
        return (t() - r) / 1000000;
      };
      n = processBrowserShim.hrtime;
      r = (t = function () {
        var e;
        return (e = n())[0] * 1000000000 + e[1];
      })() - processBrowserShim.uptime() * 1000000000;
    } else if (Date.now) {
      module.exports = function () {
        return Date.now() - o;
      };
      o = Date.now();
    } else {
      module.exports = function () {
        return new Date().getTime() - o;
      };
      o = new Date().getTime();
    }
  }).call(this);
}
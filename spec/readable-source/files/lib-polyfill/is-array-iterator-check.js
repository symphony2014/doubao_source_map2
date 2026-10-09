// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Renamed variable 'o' to 'libPolyfill'
// - Resolved require(173864) to 'lib-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 356736
         */
module.exports = function (module, exports, require) {
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var libPolyfill = require("lib-polyfill") /*id: 173864*/;
  var i = coreJsWksAccess("iterator");
  var a = Array.prototype;
  module.exports = function (t) {
    return t !== undefined && (libPolyfill.Array === t || a[i] === t);
  };
}
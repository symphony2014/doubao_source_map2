// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'iteratorMapPolyfill'
// - Resolved require(338333) to 'iterator-map-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 362469
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var iteratorMapPolyfill = require("iterator-map-polyfill") /*id: 338333*/;
  function i(t, r) {
    return [r, t];
  }
  module.exports = function () {
    return callBindPolyfill(iteratorMapPolyfill, this, i);
  };
}
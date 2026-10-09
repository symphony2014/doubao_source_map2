// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'asyncIteratorMapPolyfill'
// - Resolved require(537507) to 'async-iterator-map-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 94791
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var asyncIteratorMapPolyfill = require("async-iterator-map-polyfill") /*id: 537507*/;
  function i(t, r) {
    return [r, t];
  }
  module.exports = function () {
    return callBindPolyfill(asyncIteratorMapPolyfill, this, i);
  };
}
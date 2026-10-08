// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'o' to 'asyncIteratorHelperFactory'
// - Resolved require(776152) to 'async-iterator-helper-factory'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 638019
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var asyncIteratorHelperFactory = require("async-iterator-helper-factory") /*id: 776152*/;
  module.exports = asyncIteratorHelperFactory(function () {
    return callBindPolyfill(this.next, this.iterator);
  }, true);
}
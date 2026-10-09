// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 563696
         */
module.exports = function (module, exports, require) {
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  module.exports = function (t, r, e) {
    var o;
    var i;
    var a = e ? t : t.iterator;
    var u = t.next;
    while (!(o = callBindPolyfill(u, a)).done) {
      if ((i = r(o.value)) !== undefined) {
        return i;
      }
    }
  };
}
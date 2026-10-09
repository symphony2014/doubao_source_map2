// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'ensureSetUtil'
// - Resolved require(628828) to 'ensure-set-util'
// - Renamed variable 'a' to 'setSubsetPolyfillUtil'
// - Resolved require(314755) to 'set-subset-polyfill-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 186061
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var ensureSetUtil = require("ensure-set-util") /*id: 628828*/;
  var setSubsetPolyfillUtil = require("set-subset-polyfill-util") /*id: 314755*/;
  polyfillPropertyDefiner({
    target: "Set",
    proto: true,
    real: true,
    forced: true
  }, {
    isDisjointFrom: function (t) {
      return callBindPolyfill(setSubsetPolyfillUtil, this, ensureSetUtil(t));
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'ensureSetUtil'
// - Resolved require(628828) to 'ensure-set-util'
// - Renamed variable 'a' to 'setSubsetCheckUtil'
// - Resolved require(25694) to 'set-subset-check-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 479336
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var ensureSetUtil = require("ensure-set-util") /*id: 628828*/;
  var setSubsetCheckUtil = require("set-subset-check-util") /*id: 25694*/;
  polyfillPropertyDefiner({
    target: "Set",
    proto: true,
    real: true,
    forced: true
  }, {
    isSupersetOf: function (t) {
      return callBindPolyfill(setSubsetCheckUtil, this, ensureSetUtil(t));
    }
  });
}
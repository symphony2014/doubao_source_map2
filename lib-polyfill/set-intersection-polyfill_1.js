// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'callBindPolyfill'
// - Resolved require(406625) to 'call-bind-polyfill'
// - Renamed variable 'i' to 'ensureSetUtil'
// - Resolved require(628828) to 'ensure-set-util'
// - Renamed variable 'a' to 'setIntersectionPolyfillUtil'
// - Resolved require(343052) to 'set-intersection-polyfill-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 231613
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var callBindPolyfill = require("call-bind-polyfill") /*id: 406625*/;
  var ensureSetUtil = require("ensure-set-util") /*id: 628828*/;
  var setIntersectionPolyfillUtil = require("set-intersection-polyfill-util") /*id: 343052*/;
  polyfillPropertyDefiner({
    target: "Set",
    proto: true,
    real: true,
    forced: true
  }, {
    intersection: function (t) {
      return callBindPolyfill(setIntersectionPolyfillUtil, this, ensureSetUtil(t));
    }
  });
}
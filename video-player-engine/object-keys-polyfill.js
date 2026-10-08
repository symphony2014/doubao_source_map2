// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'Q' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'l' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'i' to 'objectKeysPolyfill_3'
// - Resolved require(18493) to 'object-keys-polyfill_3'
// - Resolved require(676963) to 'try-catch-function-wrapper'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43278.082fbd69.js
         * chunkId: 43278
         * moduleId: 294515
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var objectKeysPolyfill_3 = require("object-keys-polyfill_3") /*id: 18493*/;
  polyfillPropertyDefiner({
    target: "Object",
    stat: true,
    forced: require("try-catch-function-wrapper") /*id: 676963*/(function () {
      objectKeysPolyfill_3(1);
    })
  }, {
    keys: function (U) {
      return objectKeysPolyfill_3(requireObjectNotNullish(U));
    }
  });
}
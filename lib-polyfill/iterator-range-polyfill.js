// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'numericRangeIterator'
// - Resolved require(208602) to 'numeric-range-iterator'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 527903
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var numericRangeIterator = require("numeric-range-iterator") /*id: 208602*/;
  var i = TypeError;
  polyfillPropertyDefiner({
    target: "Iterator",
    stat: true,
    forced: true
  }, {
    range: function (t, r, e) {
      if (typeof t == "number") {
        return new numericRangeIterator(t, r, e, "number", 0, 1);
      }
      if (typeof t == "bigint") {
        return new numericRangeIterator(t, r, e, "bigint", BigInt(0), BigInt(1));
      }
      throw new i("Incorrect Iterator.range arguments");
    }
  });
}
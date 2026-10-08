// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'requireObjectNotNullish'
// - Resolved require(509978) to 'require-object-not-nullish'
// - Renamed variable 'i' to 'isPrototypeOfPolyfill'
// - Resolved require(28472) to 'is-prototype-of-polyfill'
// - Renamed variable 'a' to 'asyncIteratorWrapper'
// - Resolved require(812771) to 'async-iterator-wrapper'
// - Renamed variable 'u' to 'asyncIteratorPrototypePolyfill'
// - Resolved require(198718) to 'async-iterator-prototype-polyfill'
// - Renamed variable 'c' to 'asyncIteratorHelperPolyfill'
// - Resolved require(638019) to 'async-iterator-helper-polyfill'
// - Resolved require(87987) to 'lib-polyfill-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 168011
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var requireObjectNotNullish = require("require-object-not-nullish") /*id: 509978*/;
  var isPrototypeOfPolyfill = require("is-prototype-of-polyfill") /*id: 28472*/;
  var asyncIteratorWrapper = require("async-iterator-wrapper") /*id: 812771*/;
  var asyncIteratorPrototypePolyfill = require("async-iterator-prototype-polyfill") /*id: 198718*/;
  var asyncIteratorHelperPolyfill = require("async-iterator-helper-polyfill") /*id: 638019*/;
  polyfillPropertyDefiner({
    target: "AsyncIterator",
    stat: true,
    forced: require("lib-polyfill-check") /*id: 87987*/
  }, {
    from: function (t) {
      var r = asyncIteratorWrapper(typeof t == "string" ? requireObjectNotNullish(t) : t);
      if (isPrototypeOfPolyfill(asyncIteratorPrototypePolyfill, r.iterator)) {
        return r.iterator;
      } else {
        return new asyncIteratorHelperPolyfill(r);
      }
    }
  });
}
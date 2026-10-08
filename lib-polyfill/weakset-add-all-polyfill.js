// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'weaksetPolyfillUtilsWrapper'
// - Resolved require(659959) to 'weakset-polyfill-utils-wrapper'
// - Resolved require(153468) to 'weakset-polyfill-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 353669
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var weaksetPolyfillUtilsWrapper = require("weakset-polyfill-utils-wrapper") /*id: 659959*/;
  var i = require("weakset-polyfill-utils") /*id: 153468*/.add;
  polyfillPropertyDefiner({
    target: "WeakSet",
    proto: true,
    real: true,
    forced: true
  }, {
    addAll: function () {
      var t = weaksetPolyfillUtilsWrapper(this);
      var r = 0;
      var e = arguments.length;
      for (; r < e; r++) {
        i(t, arguments[r]);
      }
      return t;
    }
  });
}
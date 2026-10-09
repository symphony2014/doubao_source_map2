// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'i' to 'nativeConstructorDetector'
// - Resolved require(876384) to 'native-constructor-detector'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 127217
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var nativeConstructorDetector = require("native-constructor-detector") /*id: 876384*/;
  var a = globalPolyfillAccess("Array");
  polyfillPropertyDefiner({
    target: "Observable",
    stat: true,
    forced: true
  }, {
    of: function () {
      var t = nativeConstructorDetector(this) ? this : globalPolyfillAccess("Observable");
      var r = arguments.length;
      var e = a(r);
      var n = 0;
      while (n < r) {
        e[n] = arguments[n++];
      }
      return new t(function (t) {
        for (var n = 0; n < r; n++) {
          t.next(e[n]);
          if (t.closed) {
            return;
          }
        }
        t.complete();
      });
    }
  });
}
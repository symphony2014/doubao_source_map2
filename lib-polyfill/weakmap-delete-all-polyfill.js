// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'weakmapAssertion'
// - Resolved require(852001) to 'weakmap-assertion'
// - Resolved require(76713) to 'weakmap-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 734797
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var weakmapAssertion = require("weakmap-assertion") /*id: 852001*/;
  var i = require("weakmap-utils") /*id: 76713*/.remove;
  polyfillPropertyDefiner({
    target: "WeakMap",
    proto: true,
    real: true,
    forced: true
  }, {
    deleteAll: function () {
      var t;
      var r = weakmapAssertion(this);
      var e = true;
      var n = 0;
      var a = arguments.length;
      for (; n < a; n++) {
        t = i(r, arguments[n]);
        e = e && t;
      }
      return !!e;
    }
  });
}
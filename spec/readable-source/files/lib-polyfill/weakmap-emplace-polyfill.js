// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'weakmapAssertion'
// - Resolved require(852001) to 'weakmap-assertion'
// - Renamed variable 'i' to 'weakmapUtils'
// - Resolved require(76713) to 'weakmap-utils'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 256942
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var weakmapAssertion = require("weakmap-assertion") /*id: 852001*/;
  var weakmapUtils = require("weakmap-utils") /*id: 76713*/;
  var a = weakmapUtils.get;
  var u = weakmapUtils.has;
  var c = weakmapUtils.set;
  polyfillPropertyDefiner({
    target: "WeakMap",
    proto: true,
    real: true,
    forced: true
  }, {
    emplace: function (t, r) {
      var e;
      var n;
      var i = weakmapAssertion(this);
      if (u(i, t)) {
        e = a(i, t);
        if ("update" in r) {
          e = r.update(e, t, i);
          c(i, t, e);
        }
        return e;
      } else {
        n = r.insert(t, i);
        c(i, t, n);
        return n;
      }
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(362917) to 'map-polyfill-require-wrapper'
// - Resolved require(75966) to 'weakmap-polyfill-patch-init'
// - Renamed variable 'n' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'o' to 'functionBindFallback'
// - Resolved require(263497) to 'function-bind-fallback'
// - Renamed variable 'i' to 'coreJsSharedStoreAccess'
// - Resolved require(16765) to 'core-js-shared-store-access'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 850237
         */
module.exports = function (module, exports, require) {
  require("map-polyfill-require-wrapper") /*id: 362917*/;
  require("weakmap-polyfill-patch-init") /*id: 75966*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var functionBindFallback = require("function-bind-fallback") /*id: 263497*/;
  var coreJsSharedStoreAccess = require("core-js-shared-store-access") /*id: 16765*/;
  var a = globalPolyfillAccess("Map");
  var u = globalPolyfillAccess("WeakMap");
  var c = functionBindFallback([].push);
  var f = coreJsSharedStoreAccess("metadata");
  var s = f.store ||= new u();
  function l(t, r, e) {
    var n = s.get(t);
    if (!n) {
      if (!e) {
        return;
      }
      s.set(t, n = new a());
    }
    var o = n.get(r);
    if (!o) {
      if (!e) {
        return;
      }
      n.set(r, o = new a());
    }
    return o;
  }
  module.exports = {
    store: s,
    getMap: l,
    has: function (t, r, e) {
      var n = l(r, e, false);
      return n !== undefined && n.has(t);
    },
    get: function (t, r, e) {
      var n = l(r, e, false);
      if (n === undefined) {
        return undefined;
      } else {
        return n.get(t);
      }
    },
    set: function (t, r, e, n) {
      l(e, n, true).set(t, r);
    },
    keys: function (t, r) {
      var e = l(t, r, false);
      var n = [];
      if (e) {
        e.forEach(function (t, r) {
          c(n, r);
        });
      }
      return n;
    },
    toKey: function (t) {
      if (t === undefined || typeof t == "symbol") {
        return t;
      } else {
        return String(t);
      }
    }
  };
}
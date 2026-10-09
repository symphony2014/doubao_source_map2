// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(362917) to 'map-polyfill-require-wrapper'
// - Resolved require(75966) to 'weakmap-polyfill-patch-init'
// - Renamed variable 'n' to 'globalPolyfillAccess'
// - Resolved require(533515) to 'global-polyfill-access'
// - Renamed variable 'o' to 'objectCreatePolyfill_1'
// - Resolved require(557677) to 'object-create-polyfill_1'
// - Renamed variable 'i' to 'isObjectOrFunctionCheck'
// - Resolved require(527865) to 'is-object-or-function-check'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 663490
         */
module.exports = function (module, exports, require) {
  require("map-polyfill-require-wrapper") /*id: 362917*/;
  require("weakmap-polyfill-patch-init") /*id: 75966*/;
  var globalPolyfillAccess = require("global-polyfill-access") /*id: 533515*/;
  var objectCreatePolyfill_1 = require("object-create-polyfill_1") /*id: 557677*/;
  var isObjectOrFunctionCheck = require("is-object-or-function-check") /*id: 527865*/;
  var a = Object;
  var u = TypeError;
  var c = globalPolyfillAccess("Map");
  var f = globalPolyfillAccess("WeakMap");
  function s() {
    this.object = null;
    this.symbol = null;
    this.primitives = null;
    this.objectsByIndex = objectCreatePolyfill_1(null);
  }
  s.prototype.get = function (t, r) {
    return this[t] ||= r();
  };
  s.prototype.next = function (t, r, e) {
    var n = e ? this.objectsByIndex[t] ||= new f() : this.primitives ||= new c();
    var o = n.get(r);
    if (!o) {
      n.set(r, o = new s());
    }
    return o;
  };
  var l = new s();
  module.exports = function () {
    var t;
    var r;
    var e = l;
    var n = arguments.length;
    for (t = 0; t < n; t++) {
      if (isObjectOrFunctionCheck(r = arguments[t])) {
        e = e.next(t, r, true);
      }
    }
    if (this === a && e === l) {
      throw new u("Composite keys must contain a non-primitive component");
    }
    for (t = 0; t < n; t++) {
      if (!isObjectOrFunctionCheck(r = arguments[t])) {
        e = e.next(t, r, false);
      }
    }
    return e;
  };
}
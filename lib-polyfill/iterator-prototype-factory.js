// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(136661) to 'iterator-prototype-setup'
// - Renamed variable 'o' to 'objectCreatePolyfill_1'
// - Resolved require(557677) to 'object-create-polyfill_1'
// - Renamed variable 'i' to 'polyfillPropertyDescriptor'
// - Resolved require(790197) to 'polyfill-property-descriptor'
// - Renamed variable 'a' to 'setToStringTagUtil'
// - Resolved require(768336) to 'set-to-string-tag-util'
// - Renamed variable 'u' to 'libPolyfill'
// - Resolved require(173864) to 'lib-polyfill'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 1775
         */
module.exports = function (module, exports, require) {
  var n = require("iterator-prototype-setup") /*id: 136661*/.IteratorPrototype;
  var objectCreatePolyfill_1 = require("object-create-polyfill_1") /*id: 557677*/;
  var polyfillPropertyDescriptor = require("polyfill-property-descriptor") /*id: 790197*/;
  var setToStringTagUtil = require("set-to-string-tag-util") /*id: 768336*/;
  var libPolyfill = require("lib-polyfill") /*id: 173864*/;
  function c() {
    return this;
  }
  module.exports = function (t, r, e, f) {
    var s = r + " Iterator";
    t.prototype = objectCreatePolyfill_1(n, {
      next: polyfillPropertyDescriptor(+!f, e)
    });
    setToStringTagUtil(t, s, false, true);
    libPolyfill[s] = c;
    return t;
  };
}
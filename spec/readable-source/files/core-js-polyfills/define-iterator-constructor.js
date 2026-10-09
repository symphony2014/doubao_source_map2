// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(336147) to 'iterator-prototype-polyfill'
// - Renamed variable 'o' to 'objectCreatePolyfill'
// - Resolved require(934258) to 'object-create-polyfill'
// - Renamed variable 'i' to 'createPropertyDescriptor'
// - Resolved require(757570) to 'create-property-descriptor'
// - Renamed variable 'u' to 'setSymbolToStringTag_1'
// - Resolved require(434792) to 'set-symbol-to-string-tag_1'
// - Renamed variable 'c' to 'emptyModuleExport'
// - Resolved require(159645) to 'empty-module-export'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 80332.778ef835.js
         * chunkId: 80332
         * moduleId: 927878
         */
module.exports = function (module, exports, require) {
  var e = require("iterator-prototype-polyfill") /*id: 336147*/.IteratorPrototype;
  var objectCreatePolyfill = require("object-create-polyfill") /*id: 934258*/;
  var createPropertyDescriptor = require("create-property-descriptor") /*id: 757570*/;
  var setSymbolToStringTag_1 = require("set-symbol-to-string-tag_1") /*id: 434792*/;
  var emptyModuleExport = require("empty-module-export") /*id: 159645*/;
  function s() {
    return this;
  }
  module.exports = function (t, r, n, f) {
    var a = r + " Iterator";
    t.prototype = objectCreatePolyfill(e, {
      next: createPropertyDescriptor(+!f, n)
    });
    setSymbolToStringTag_1(t, a, false, true);
    emptyModuleExport[a] = s;
    return t;
  };
}
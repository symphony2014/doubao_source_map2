// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Renamed variable 'o' to 'arrayGroupByPolyfill'
// - Resolved require(106940) to 'array-group-by-polyfill'
// - Renamed variable 'i' to 'arrayUnscopablesDefine'
// - Resolved require(557126) to 'array-unscopables-define'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 516374
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var arrayGroupByPolyfill = require("array-group-by-polyfill") /*id: 106940*/;
  var arrayUnscopablesDefine = require("array-unscopables-define") /*id: 557126*/;
  polyfillPropertyDefiner({
    target: "Array",
    proto: true
  }, {
    group: function (t, r) {
      return arrayGroupByPolyfill(this, t, r);
    }
  });
  arrayUnscopablesDefine("group");
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'polyfillPropertyDefiner'
// - Resolved require(358006) to 'polyfill-property-definer'
// - Resolved require(343120) to 'array-iteration-polyfill'
// - Renamed variable 'i' to 'arrayUnscopablesDefine'
// - Resolved require(557126) to 'array-unscopables-define'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 829010
         */
module.exports = function (module, exports, require) {
  var polyfillPropertyDefiner = require("polyfill-property-definer") /*id: 358006*/;
  var o = require("array-iteration-polyfill") /*id: 343120*/.filterReject;
  var arrayUnscopablesDefine = require("array-unscopables-define") /*id: 557126*/;
  polyfillPropertyDefiner({
    target: "Array",
    proto: true,
    forced: true
  }, {
    filterOut: function (t) {
      return o(this, t, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  arrayUnscopablesDefine("filterOut");
}
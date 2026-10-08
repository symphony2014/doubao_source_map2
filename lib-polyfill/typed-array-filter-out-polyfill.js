// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'typedArrayPolyfillUtil'
// - Resolved require(357134) to 'typed-array-polyfill-util'
// - Resolved require(343120) to 'array-iteration-polyfill'
// - Renamed variable 'i' to 'typedArrayCreateUtil'
// - Resolved require(254587) to 'typed-array-create-util'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 557488
         */
module.exports = function (module, exports, require) {
  var typedArrayPolyfillUtil = require("typed-array-polyfill-util") /*id: 357134*/;
  var o = require("array-iteration-polyfill") /*id: 343120*/.filterReject;
  var typedArrayCreateUtil = require("typed-array-create-util") /*id: 254587*/;
  var a = typedArrayPolyfillUtil.aTypedArray;
  typedArrayPolyfillUtil.exportTypedArrayMethod("filterOut", function (t) {
    var r = o(a(this), t, arguments.length > 1 ? arguments[1] : undefined);
    return typedArrayCreateUtil(this, r);
  }, true);
}
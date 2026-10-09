// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'n' to 'coreJsWksAccess'
// - Resolved require(349338) to 'core-js-wks-access'
// - Resolved require(760974) to 'es5-define-property-impl'
// - Updated imported property 'f' to 'defineProperty' (module 760974)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: lib-polyfill.888d57d5.js
         * chunkId: 72126
         * moduleId: 638798
         */
module.exports = function (module, exports, require) {
  var coreJsWksAccess = require("core-js-wks-access") /*id: 349338*/;
  var o = require("es5-define-property-impl") /*id: 760974*/.defineProperty;
  var i = coreJsWksAccess("metadata");
  var a = Function.prototype;
  if (a[i] === undefined) {
    o(a, i, {
      value: null
    });
  }
}
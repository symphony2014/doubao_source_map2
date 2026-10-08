// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'setPropertyValue'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 859066
         */
module.exports = function (module, exports, require) {
  var safePropertySet = require("safe-property-set") /*id: 252243*/;
  var isEqualUtil = require("is-equal-util") /*id: 18380*/;
  var o = Object.prototype.hasOwnProperty;
  exports.setPropertyValue = function (e, t, n) {
    var a = e[t];
    if (!o.call(e, t) || !isEqualUtil.isEqual(a, n) || n === undefined && !(t in e)) {
      safePropertySet.safeSetProperty(e, t, n);
    }
  };
}
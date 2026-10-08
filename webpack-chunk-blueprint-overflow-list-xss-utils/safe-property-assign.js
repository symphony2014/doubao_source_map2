// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Z' to 'safePropAssign'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 182115
         */
module.exports = function (module, exports, require) {
  var safePropertySetter = require("safe-property-setter") /*id: 859066*/;
  var safePropertySet = require("safe-property-set") /*id: 252243*/;
  exports.safePropAssign = function (e, t, n, o) {
    var a = !n;
    n ||= {};
    var s = -1;
    var u = t.length;
    while (++s < u) {
      var c = t[s];
      var l = o ? o(n[c], e[c], c, n, e) : undefined;
      if (l === undefined) {
        l = e[c];
      }
      if (a) {
        safePropertySet.safeSetProperty(n, c, l);
      } else {
        safePropertySetter.setPropertyValue(n, c, l);
      }
    }
    return n;
  };
}
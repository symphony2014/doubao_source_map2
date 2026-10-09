// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'sprintfUtility'
// - Resolved require(480831) to 'sprintf-utility'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 110712
         */
module.exports = function (module, exports, require) {
  var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
    return typeof e;
  } : function (e) {
    if (e && typeof Symbol == "function" && e.constructor === Symbol) {
      return "symbol";
    } else {
      return typeof e;
    }
  };
  var sprintfUtility = require("sprintf-utility") /*id: 480831*/;
  exports.default = {
    name: "sprintf",
    type: "postProcessor",
    process: function (e, t, n) {
      if (n.sprintf) {
        if (Object.prototype.toString.apply(n.sprintf) === "[object Array]") {
          return sprintfUtility.vsprintf(e, n.sprintf);
        } else if (r(n.sprintf) === "object") {
          return sprintfUtility.sprintf(e, n.sprintf);
        } else {
          return e;
        }
      } else {
        return e;
      }
    },
    overloadTranslationOptionHandler: function (e) {
      var t = [];
      var n = 1;
      for (; n < e.length; n++) {
        t.push(e[n]);
      }
      return {
        postProcess: "sprintf",
        sprintf: t
      };
    }
  };
}
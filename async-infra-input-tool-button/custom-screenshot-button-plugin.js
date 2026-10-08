// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'screenshotDownloadPopover'
// - Resolved require(274023) to 'screenshot-download-popover'
// - Updated imported property 'd' to 'ScreenshotDownloadPopover' (module 274023)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-tool-button.3b5f4e57.js
         * chunkId: 76842
         * moduleId: 506194
         */
module.exports = function (module, exports, require) {
  var screenshotDownloadPopover = require("screenshot-download-popover") /*id: 274023*/;
  class r {
    constructor() {
      var e;
      var t;
      var n;
      e = "Content";
      t = screenshotDownloadPopover.ScreenshotDownloadPopover;
      if ((e = typeof (n = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var n = e[Symbol.toPrimitive];
        if (n !== undefined) {
          var i = n.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? n : n + "") in this) {
        Object.defineProperty(this, e, {
          value: t,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = t;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    CustomScreenshotButtonPlugin: function () {
      return r;
    }
  });
}
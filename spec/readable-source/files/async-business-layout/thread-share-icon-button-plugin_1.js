// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'threadShareButtonComponent'
// - Resolved require(847218) to 'thread-share-button-component'
// - Renamed variable 'r' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'K' to 'ThreadShareButton' (module 847218)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 341054
         */
module.exports = function (module, exports, require) {
  var threadShareButtonComponent = require("thread-share-button-component") /*id: 847218*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let o = () => reactJsxRuntimeCoreReexport.jsx(threadShareButtonComponent.ThreadShareButton, {
    tooltipProps: {
      position: "bottom"
    }
  });
  class a {
    constructor() {
      var e;
      var t;
      if ((e = typeof (t = function (e, t) {
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
      }(e = "Content", "string")) == "symbol" ? t : t + "") in this) {
        Object.defineProperty(this, e, {
          value: o,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        this[e] = o;
      }
    }
  }
  require.r(exports);
  require.d(exports, {
    ThreadShareIconButtonPlugin: function () {
      return a;
    }
  });
}
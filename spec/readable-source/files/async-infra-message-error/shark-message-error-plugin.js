// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'sharkBlockErrorHandler'
// - Resolved require(523955) to 'shark-block-error-handler'
// - Renamed variable 'n' to 'sharkErrorSymbol'
// - Resolved require(737752) to 'shark-error-symbol'
// - Updated imported property 'jV' to 'sharkBlockErrorHandler' (module 523955)
// - Updated imported property 'q' to 'SharkErrorSymbol' (module 737752)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message-error.66b6516a.js
         * chunkId: 81918
         * moduleId: 313822
         */
module.exports = function (module, exports, require) {
  var sharkBlockErrorHandler = require("shark-block-error-handler") /*id: 523955*/;
  var sharkErrorSymbol = require("shark-error-symbol") /*id: 737752*/;
  class o {
    handleSendingMessageError(e) {
      sharkBlockErrorHandler.sharkBlockErrorHandler.handler.handleError(e, sharkBlockErrorHandler.sharkBlockErrorHandler.defaultConfig).catch(e => {
        throw e;
      });
    }
    constructor() {
      var e;
      var t;
      var r;
      e = "pluginIdentifier";
      t = sharkErrorSymbol.SharkErrorSymbol;
      if ((e = typeof (r = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var r = e[Symbol.toPrimitive];
        if (r !== undefined) {
          var i = r.call(e, t || "default");
          if (typeof i != "object") {
            return i;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? r : r + "") in this) {
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
    SharkMessageErrorPlugin: function () {
      return o;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatInputUploadButton'
// - Resolved require(839441) to 'chat-input-upload-button'
// - Updated imported property 'Y' to 'ChatUploadButton' (module 839441)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-input-tool-button.3b5f4e57.js
         * chunkId: 76842
         * moduleId: 923299
         */
module.exports = function (module, exports, require) {
  var chatInputUploadButton = require("chat-input-upload-button") /*id: 839441*/;
  class r {
    constructor() {
      var e;
      var t;
      var n;
      e = "Content";
      t = chatInputUploadButton.ChatUploadButton;
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
    SimpleUploadFileButtonPlugin: function () {
      return r;
    }
  });
}
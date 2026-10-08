// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'securityVerifySdkLoader'
// - Resolved require(279207) to 'security-verify-sdk-loader'
// - Renamed variable 'r' to 'chatMessageFpParams'
// - Resolved require(484041) to 'chat-message-fp-params'
// - Updated imported property 'g' to 'getFingerprint' (module 279207)
// - Updated imported property 'T' to 'messageFpParams' (module 484041)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 137453
         */
module.exports = function (module, exports, require) {
  var securityVerifySdkLoader = require("security-verify-sdk-loader") /*id: 279207*/;
  var chatMessageFpParams = require("chat-message-fp-params") /*id: 484041*/;
  class o {
    async beforeMessageSending(e, t) {
      if (t.ext?.fp) {
        return t;
      }
      let r = await securityVerifySdkLoader.getFingerprint();
      t.ext = {
        ...t.ext,
        fp: r
      };
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = chatMessageFpParams.messageFpParams;
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
    MessageFpParamsMessageLifeCyclePlugin: function () {
      return o;
    }
  });
}
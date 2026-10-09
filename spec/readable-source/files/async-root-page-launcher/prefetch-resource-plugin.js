// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'chatServiceNodeLoader'
// - Resolved require(226315) to 'chat-service-node-loader'
// - Renamed variable 'n' to 'chatPluginMatcherRegistry'
// - Resolved require(107672) to 'chat-plugin-matcher-registry'
// - Updated imported property 'f' to 'loadChatService' (module 226315)
// - Updated imported property 'Y' to 'initMsgNodeLoaders' (module 226315)
// - Updated imported property 'Je' to 'loadMessageLifeCycleMatcher' (module 107672)
// - Updated imported property 'hV' to 'loadReceiveContentBlockMatcher' (module 107672)
// - Updated imported property 'HJ' to 'loadSendBoxMatcher' (module 107672)
// - Updated imported property 'at' to 'loadReceiveBoxMatcher' (module 107672)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-root-page-launcher.aa5f2512.js
         * chunkId: 22154
         * moduleId: 308283
         */
module.exports = function (module, exports, require) {
  var chatServiceNodeLoader = require("chat-service-node-loader") /*id: 226315*/;
  var chatPluginMatcherRegistry = require("chat-plugin-matcher-registry") /*id: 107672*/;
  class o {
    constructor() {
      var e;
      var t;
      var i;
      e = "onIdle";
      t = () => {
        chatServiceNodeLoader.loadChatService();
        chatServiceNodeLoader.initMsgNodeLoaders();
        chatPluginMatcherRegistry.loadMessageLifeCycleMatcher();
        chatPluginMatcherRegistry.loadReceiveContentBlockMatcher();
        chatPluginMatcherRegistry.loadSendBoxMatcher();
        chatPluginMatcherRegistry.loadReceiveBoxMatcher();
      };
      if ((e = typeof (i = function (e, t) {
        if (typeof e != "object" || !e) {
          return e;
        }
        var i = e[Symbol.toPrimitive];
        if (i !== undefined) {
          var r = i.call(e, t || "default");
          if (typeof r != "object") {
            return r;
          }
          throw TypeError("@@toPrimitive must return a primitive value.");
        }
        return (t === "string" ? String : Number)(e);
      }(e, "string")) == "symbol" ? i : i + "") in this) {
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
    PrefetchResourcePlugin: function () {
      return o;
    }
  });
}
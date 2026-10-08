// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'asyncSkillLifecycleEmitter'
// - Resolved require(697767) to 'async-skill-lifecycle-emitter'
// - Renamed variable 'r' to 'chatImageGenerateBlockSymbol'
// - Resolved require(394397) to 'chat-image-generate-block-symbol'
// - Updated imported property 'q' to 'lifecycleEmitter' (module 697767)
// - Updated imported property 'm' to 'imageGenerateBlock' (module 394397)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 439756
         */
module.exports = function (module, exports, require) {
  var asyncSkillLifecycleEmitter = require("async-skill-lifecycle-emitter") /*id: 697767*/;
  var chatImageGenerateBlockSymbol = require("chat-image-generate-block-symbol") /*id: 394397*/;
  class a {
    onMessageReceivingUpdate(e, t) {
      var n;
      if ((n = asyncSkillLifecycleEmitter.lifecycleEmitter.get("onMessageReceivingUpdate")) !== null && n !== undefined) {
        n.forEach(n => n(e, t));
      }
      return t;
    }
    onMessageReceivingStart(e, t) {
      var n;
      if ((n = asyncSkillLifecycleEmitter.lifecycleEmitter.get("onMessageReceivingStart")) !== null && n !== undefined) {
        n.forEach(n => n(e, t));
      }
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = chatImageGenerateBlockSymbol.imageGenerateBlock;
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
    CreationBlockMessageLifeCyclePlugin: function () {
      return a;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'asyncSkillLifecycleEmitter'
// - Resolved require(697767) to 'async-skill-lifecycle-emitter'
// - Renamed variable 'r' to 'chatImageGenerateSymbol'
// - Resolved require(598770) to 'chat-image-generate-symbol'
// - Updated imported property 'q' to 'lifecycleEmitter' (module 697767)
// - Updated imported property 'A' to 'imageGenerateSymbol' (module 598770)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 360154
         */
module.exports = function (module, exports, require) {
  var asyncSkillLifecycleEmitter = require("async-skill-lifecycle-emitter") /*id: 697767*/;
  var chatImageGenerateSymbol = require("chat-image-generate-symbol") /*id: 598770*/;
  class a {
    beforeMessageSending(e, t) {
      var n;
      if ((n = asyncSkillLifecycleEmitter.lifecycleEmitter.get("beforeMessageSending")) !== null && n !== undefined) {
        n.forEach(n => n(e, t));
      }
      return t;
    }
    onLoadingMessageUpdate(e, t) {
      var n;
      if ((n = asyncSkillLifecycleEmitter.lifecycleEmitter.get("onLoadingMessageUpdate")) !== null && n !== undefined) {
        n.forEach(n => n(e, t));
      }
      return t;
    }
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
      t = chatImageGenerateSymbol.imageGenerateSymbol;
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
    ImageGenerateMessageLifeCyclePlugin: function () {
      return a;
    }
  });
}
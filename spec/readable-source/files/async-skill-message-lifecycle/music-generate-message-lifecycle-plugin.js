// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'messageContentTypeAndStatusChecker'
// - Resolved require(749637) to 'message-content-type-and-status-checker'
// - Renamed variable 'r' to 'musicAutoplayStateSetter'
// - Resolved require(90452) to 'music-autoplay-state-setter'
// - Renamed variable 'a' to 'musicGenerateSymbol_1'
// - Resolved require(556673) to 'music-generate-symbol_1'
// - Updated imported property 'H' to 'setMusicAutoPlay' (module 90452)
// - Updated imported property 'n' to 'musicGenerateId' (module 556673)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 349575
         */
module.exports = function (module, exports, require) {
  var messageContentTypeAndStatusChecker = require("message-content-type-and-status-checker") /*id: 749637*/;
  var musicAutoplayStateSetter = require("music-autoplay-state-setter") /*id: 90452*/;
  var musicGenerateSymbol_1 = require("music-generate-symbol_1") /*id: 556673*/;
  class o {
    onMessageReceivingUpdate(e, t) {
      if (messageContentTypeAndStatusChecker.vU5(t)) {
        musicAutoplayStateSetter.setMusicAutoPlay(true);
      }
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = musicGenerateSymbol_1.musicGenerateId;
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
    MusicGenerateMessageLifeCyclePlugin: function () {
      return o;
    }
  });
}
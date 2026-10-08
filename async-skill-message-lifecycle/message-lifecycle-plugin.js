// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatPodcastAction'
// - Resolved require(577721) to 'chat-podcast-action'
// - Resolved require(358907) to 'event-emitter-class'
// - Updated imported property 'M' to 'EventEmitter' (module 358907)
// - Updated imported property 'N' to 'podcastAction' (module 577721)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-message-lifecycle.0911e152.js
         * chunkId: 71730
         * moduleId: 989858
         */
module.exports = function (module, exports, require) {
  var chatPodcastAction = require("chat-podcast-action") /*id: 577721*/;
  let r = new (require("event-emitter-class") /*id: 358907*/.EventEmitter)();
  class a {
    async processMessageBefore(e, t) {
      for (let n of r.get("processMessageBefore")) {
        t = await n(e, t);
      }
      return t;
    }
    constructor() {
      var e;
      var t;
      var n;
      e = "pluginIdentifier";
      t = chatPodcastAction.podcastAction;
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
    ReadDocumentMessageLifeCyclePlugin: function () {
      return a;
    }
  });
}
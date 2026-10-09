// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'r' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'o' to 'breakStreamCmdPluginSymbol'
// - Resolved require(262749) to 'break-stream-cmd-plugin-symbol'
// - Updated imported property 'Q' to 'breakStreamPlugin' (module 262749)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-infra-message.268c1d3b.js
         * chunkId: 81922
         * moduleId: 11236
         */
module.exports = function (module, exports, require) {
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var breakStreamCmdPluginSymbol = require("break-stream-cmd-plugin-symbol") /*id: 262749*/;
  function s(e, t, n) {
    var i;
    if ((t = typeof (i = function (e, t) {
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
    }(t, "string")) == "symbol" ? i : i + "") in e) {
      Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = n;
    }
    return e;
  }
  class l {
    constructor() {
      s(this, "pluginIdentifier", breakStreamCmdPluginSymbol.breakStreamPlugin);
      s(this, "handleCmd", async e => {
        if (e.data.version === "2.0") {
          let {
            conversation_id: s = "",
            reply_msg_id: l = "",
            message_id: a = ""
          } = e.data.data.break_stream_msg_notify || {};
          loggerServiceCore.defaultLogger.persist.info({
            message: "Cmd: BreakStreamMessage",
            meta: {
              conversation_id: s,
              reply_msg_id: l,
              message_id: a
            }
          });
          let c = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
          let u = c == null ? undefined : c.getActiveSession(s);
          let d = (u == null ? undefined : u.latestMessage?.message_id) === l || (u == null ? undefined : u.latestMessage?.reply_id) === l;
          if ((u == null ? undefined : u.latestMessage?.message_id) === a || d) {
            loggerServiceCore.defaultLogger.persist.info({
              message: "Cmd: BreakStreamMessage, Executed Successfully",
              meta: {
                conversation_id: s,
                reply_msg_id: l,
                message_id: a
              }
            });
            if (c != null) {
              c.breakMessage({
                session: u,
                skipRequestBreakApi: true
              });
            }
          }
        }
      });
    }
  }
  require.r(exports);
  require.d(exports, {
    BreakStreamMessageCmdPlugin: function () {
      return l;
    }
  });
}
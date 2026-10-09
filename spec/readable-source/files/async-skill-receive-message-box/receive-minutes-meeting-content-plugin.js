// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMeetingMinutesKey'
// - Resolved require(123347) to 'chat-meeting-minutes-key'
// - Renamed variable 'r' to 'chatMessageContentRenderer_1'
// - Resolved require(783136) to 'chat-message-content-renderer_1'
// - Renamed variable 'o' to 'chatMeetingMinutesCard'
// - Resolved require(614979) to 'chat-meeting-minutes-card'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'rd' to 'ChatMessageContentRenderer' (module 783136)
// - Updated imported property 'J' to 'meetingMinutesCard' (module 614979)
// - Updated imported property 'B' to 'receiveMinutesKey' (module 123347)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 982106
         */
module.exports = function (module, exports, require) {
  var chatMeetingMinutesKey = require("chat-meeting-minutes-key") /*id: 123347*/;
  var chatMessageContentRenderer_1 = require("chat-message-content-renderer_1") /*id: 783136*/;
  var chatMeetingMinutesCard = require("chat-meeting-minutes-card") /*id: 614979*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let l = e => {
    let {
      inView: t,
      message: n
    } = e;
    return reactJsxRuntimeCoreReexport.jsx(chatMessageContentRenderer_1.ChatMessageContentRenderer, {
      inView: t,
      message: n,
      messageBlockText: undefined,
      messageBlockTextFinish: undefined,
      messageBlockTextBroken: undefined,
      customRenderOptions: {
        useCustomReplacementElements: () => chatMeetingMinutesCard.meetingMinutesCard(n)
      }
    });
  };
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
  class c {
    constructor() {
      s(this, "pluginIdentifier", chatMeetingMinutesKey.receiveMinutesKey);
      s(this, "Content", l);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveMinutesMeetingContentPlugin: function () {
      return c;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatMeetingMinutesKey'
// - Resolved require(123347) to 'chat-meeting-minutes-key'
// - Renamed variable 'l' to 'asyncSkillContentBlock_5'
// - Resolved require(837193) to 'async-skill-content-block_5'
// - Renamed variable 'r' to 'chatContextProviders'
// - Resolved require(793426) to 'chat-context-providers'
// - Renamed variable 'o' to 'chatMeetingMinutesCard'
// - Resolved require(614979) to 'chat-meeting-minutes-card'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'p3' to 'useArtifactClick' (module 793426)
// - Updated imported property 'N' to 'AsyncSkillContentBlock' (module 837193)
// - Updated imported property 'J' to 'meetingMinutesCard' (module 614979)
// - Updated imported property 'B' to 'receiveMinutesKey' (module 123347)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 36568
         */
module.exports = function (module, exports, require) {
  var chatMeetingMinutesKey = require("chat-meeting-minutes-key") /*id: 123347*/;
  var asyncSkillContentBlock_5 = require("async-skill-content-block_5") /*id: 837193*/;
  var chatContextProviders = require("chat-context-providers") /*id: 793426*/;
  var chatMeetingMinutesCard = require("chat-meeting-minutes-card") /*id: 614979*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      inView: t,
      message: n,
      theme: i
    } = e;
    let {
      onArtifactCardClick: s
    } = chatContextProviders.useArtifactClick();
    return reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_5.AsyncSkillContentBlock, {
      inView: t,
      message: n,
      theme: i,
      messageBlockText: undefined,
      messageBlockTextFinish: undefined,
      messageBlockTextBroken: undefined,
      customRenderOptions: {
        useCustomReplacementElements: () => chatMeetingMinutesCard.meetingMinutesCard(n, false, s)
      }
    });
  };
  function c(e, t, n) {
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
  let d = e => reactJsxRuntimeCoreReexport.jsx(s, {
    ...e
  });
  class u {
    constructor() {
      c(this, "pluginIdentifier", chatMeetingMinutesKey.receiveMinutesKey);
      c(this, "Content", d);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveMinutesMeetingContentPlugin: function () {
      return u;
    }
  });
}
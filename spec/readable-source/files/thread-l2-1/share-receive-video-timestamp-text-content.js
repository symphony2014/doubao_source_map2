// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'chatVideoTimestampSymbol'
// - Resolved require(62607) to 'chat-video-timestamp-symbol'
// - Renamed variable 'l' to 'asyncSkillContentBlock_5'
// - Resolved require(837193) to 'async-skill-content-block_5'
// - Renamed variable 'r' to 'desktopTimestampUrlHandler'
// - Resolved require(98217) to 'desktop-timestamp-url-handler'
// - Renamed variable 'o' to 'chatTimestampRenderer'
// - Resolved require(644303) to 'chat-timestamp-renderer'
// - Renamed variable 'a' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'q2' to 'openTimestampedUrl' (module 98217)
// - Updated imported property 'N' to 'AsyncSkillContentBlock' (module 837193)
// - Updated imported property 'o' to 'renderChatTimestamps' (module 644303)
// - Updated imported property 'D' to 'videoTimestampSymbol' (module 62607)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: thread-l2-1.e4ec1d1f.js
         * chunkId: 2049
         * moduleId: 91066
         */
module.exports = function (module, exports, require) {
  var chatVideoTimestampSymbol = require("chat-video-timestamp-symbol") /*id: 62607*/;
  var asyncSkillContentBlock_5 = require("async-skill-content-block_5") /*id: 837193*/;
  var desktopTimestampUrlHandler = require("desktop-timestamp-url-handler") /*id: 98217*/;
  var chatTimestampRenderer = require("chat-timestamp-renderer") /*id: 644303*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let s = e => {
    let {
      inView: t,
      message: n,
      theme: i
    } = e;
    let s = (e, t) => {
      if (e && !(t < 0)) {
        desktopTimestampUrlHandler.openTimestampedUrl(e, t);
      }
    };
    return reactJsxRuntimeCoreReexport.jsx(asyncSkillContentBlock_5.AsyncSkillContentBlock, {
      inView: t,
      message: n,
      theme: i,
      messageBlockText: undefined,
      messageBlockTextFinish: undefined,
      messageBlockTextBroken: undefined,
      customRenderOptions: {
        useCustomReplacementElements: e => chatTimestampRenderer.renderChatTimestamps({
          ...e,
          onClickRef: s,
          isSideChat: false
        })
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
  class d {
    constructor() {
      c(this, "pluginIdentifier", chatVideoTimestampSymbol.videoTimestampSymbol);
      c(this, "Content", s);
    }
  }
  require.r(exports);
  require.d(exports, {
    ShareReceiveVideoTimestampTextContent: function () {
      return d;
    }
  });
}
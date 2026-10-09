// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'r' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'o' to 'qsMusicSymbol'
// - Resolved require(617441) to 'qs-music-symbol'
// - Renamed variable 'a' to 'musicPlayerComponent'
// - Resolved require(564298) to 'music-player-component'
// - Renamed variable 'l' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'Jp' to 'checkMessageIdMatch' (module 393180)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'mP' to 'MusicPlayerComponent' (module 564298)
// - Updated imported property 'Q' to 'qsMusicSymbol' (module 617441)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-box.cd8b1898.js
         * chunkId: 16843
         * moduleId: 820259
         */
module.exports = function (module, exports, require) {
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var qsMusicSymbol = require("qs-music-symbol") /*id: 617441*/;
  var musicPlayerComponent = require("music-player-component") /*id: 564298*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
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
  let c = e => {
    let {
      inView: t,
      message: n
    } = e;
    let o = conversationMessageUtils_1.checkMessageIdMatch(chatMessageStoreFactory.createMessageStore.getState(), n.conversation_id || "", n.message_id || "");
    return reactJsxRuntimeCoreReexport.jsx(musicPlayerComponent.MusicPlayerComponent, {
      inView: t,
      message: n,
      isLastAvailableMessage: o
    });
  };
  class d {
    constructor() {
      s(this, "pluginIdentifier", qsMusicSymbol.qsMusicSymbol);
      s(this, "Content", c);
    }
  }
  require.r(exports);
  require.d(exports, {
    ReceiveQSMusicCardPlugin: function () {
      return d;
    }
  });
}
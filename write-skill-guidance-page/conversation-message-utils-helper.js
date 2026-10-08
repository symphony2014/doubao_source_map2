// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'DQ' to 'countMessageContentLength'
// - Renamed export 'G_' to 'getCrowdTestReferInfo'
// - Renamed export 'WN' to 'isRectEmpty'
// - Renamed export 'dW' to 'getParentDomain'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: flow-doc_doc-launcher.6a42d2d9.js
         * chunkId: 3577
         * moduleId: 218543
         */
module.exports = function (module, exports, require) {
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var inputToolConverter = require("input-tool-converter") /*id: 352793*/;
  let a = e => {
    let {
      left: i,
      top: n,
      width: r,
      height: o
    } = e;
    return !i && !n && !r && !o;
  };
  let s = e => {
    let i = e.split(".");
    if (i.length <= 1 || e.startsWith(".") && i.length === 2) {
      return e;
    } else {
      return i.slice(0, -1).join(".");
    }
  };
  let c = e => {
    let {
      data: i
    } = e;
    let n = 0;
    for (let e of i) {
      if (inputToolConverter.isTextType(e)) {
        n += e.text.length;
      } else if (inputToolConverter.isSelectType(e)) {
        n += 1;
      } else if (inputToolConverter.isPlaceholderType(e)) {
        n += 1;
        break;
      }
    }
    return n;
  };
  let d = e => {
    if (!e) {
      return {
        isUnselectedCrowdTest: false,
        referMessage: null
      };
    }
    let {
      conversation_id: a = ""
    } = e;
    let s = e.ext?.is_crowd_testing;
    let c = e.ext?.refer_msg_id;
    let d = chatMessageStoreFactory.createMessageStore.getState();
    let u = c && conversationMessageUtils_1.getMessageById(d, a, c);
    return {
      isUnselectedCrowdTest: !!u && !!s && !(u == null ? undefined : u.ext?.crowd_test_message_group_selected),
      referMessage: u
    };
  };
  require.d(exports, {
    countMessageContentLength: function () {
      return c;
    },
    getCrowdTestReferInfo: function () {
      return d;
    },
    isRectEmpty: function () {
      return a;
    },
    getParentDomain: function () {
      return s;
    }
  });
}
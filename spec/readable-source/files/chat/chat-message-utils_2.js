// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Fl' to 'isResendMessage'
// - Renamed export 'WV' to 'isDisableRegen'
// - Renamed export 'Z_' to 'isVisibleStatus'
// - Renamed export 'iB' to 'isReplaceMessage'
// - Renamed export 'l7' to 'isLoadingMessage'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat.dc7535d9.js
         * chunkId: 95928
         * moduleId: 149539
         */
module.exports = function (module, exports, require) {
  var isNullishCheck = require("is-nullish-check") /*id: 282109*/;
  var chatConstantsEnum = require("chat-constants-enum") /*id: 876559*/;
  var chatMessageTypes = require("chat-message-types") /*id: 243788*/;
  let a = e => {
    var t;
    return (e == null ? undefined : e.message_type) === chatMessageTypes.MessageType.Loading || (e == null ? undefined : e.content_type) === 2003 || !!(e == null ? undefined : (t = e.content_blocks_v2) === null || t === undefined ? undefined : t.find(e => e.block_type === chatConstantsEnum.messageContentType.BLOCK_LOADING));
  };
  let l = e => !isNullishCheck.isNil(e == null ? undefined : e.status) && (e == null ? undefined : e.status) !== chatMessageTypes.PushMessageStatus.InVisible;
  let s = e => {
    return !!(e == null ? undefined : e.is_replace) || (e == null ? undefined : e.ext?.replace) === "1";
  };
  let u = e => {
    return (e == null ? undefined : e.ext?.resend) === "1";
  };
  let c = e => {
    return (e == null ? undefined : e.ext?.disable_regen) === "1";
  };
  require.d(exports, {
    isResendMessage: function () {
      return u;
    },
    isDisableRegen: function () {
      return c;
    },
    isVisibleStatus: function () {
      return l;
    },
    isReplaceMessage: function () {
      return s;
    },
    isLoadingMessage: function () {
      return a;
    }
  });
}
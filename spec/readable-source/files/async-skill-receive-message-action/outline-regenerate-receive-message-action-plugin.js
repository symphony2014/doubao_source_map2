// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'asyncSkillReceiveMessageAction_1'
// - Resolved require(391396) to 'async-skill-receive-message-action_1'
// - Renamed variable 'r' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Renamed variable 'o' to 'chatServiceContext'
// - Resolved require(18590) to 'chat-service-context'
// - Renamed variable 'a' to 'iconButtonWithTooltip'
// - Resolved require(158007) to 'icon-button-with-tooltip'
// - Renamed variable 'l' to 'chatMessageStoreUpdater'
// - Resolved require(401891) to 'chat-message-store-updater'
// - Renamed variable 's' to 'chatMessageStoreFactory'
// - Resolved require(794449) to 'chat-message-store-factory'
// - Renamed variable 'd' to 'conversationMessageUtils_1'
// - Resolved require(393180) to 'conversation-message-utils_1'
// - Renamed variable 'c' to 'messageRegenAndReplyUtils'
// - Resolved require(893308) to 'message-regen-and-reply-utils'
// - Renamed variable 'u' to 'syncIconComponent'
// - Resolved require(650706) to 'sync-icon-component'
// - Renamed variable 'v' to 'chatOutlineRegenerate'
// - Resolved require(521705) to 'chat-outline-regenerate'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'GL' to 'useChatService' (module 18590)
// - Updated imported property 'K' to 'IconButton' (module 158007)
// - Updated imported property 'o' to 'SyncIcon' (module 650706)
// - Updated imported property 'GH' to 'createMessageStore' (module 794449)
// - Updated imported property 'PJ' to 'getMessageById' (module 393180)
// - Updated imported property 'b3' to 'SceneType' (module 791429)
// - Updated imported property 'z' to 'updateChatMessages' (module 401891)
// - Updated imported property 'ZJ' to 'regenMessageActions' (module 893308)
// - Updated imported property 'K' to 'outlineRegenerate' (module 521705)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-receive-message-action.ba18ba91.js
         * chunkId: 33086
         * moduleId: 33967
         */
module.exports = function (module, exports, require) {
  var asyncSkillReceiveMessageAction_1 = require("async-skill-receive-message-action_1") /*id: 391396*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var iconButtonWithTooltip = require("icon-button-with-tooltip") /*id: 158007*/;
  var chatMessageStoreUpdater = require("chat-message-store-updater") /*id: 401891*/;
  var chatMessageStoreFactory = require("chat-message-store-factory") /*id: 794449*/;
  var conversationMessageUtils_1 = require("conversation-message-utils_1") /*id: 393180*/;
  var messageRegenAndReplyUtils = require("message-regen-and-reply-utils") /*id: 893308*/;
  var syncIconComponent = require("sync-icon-component") /*id: 650706*/;
  var chatOutlineRegenerate = require("chat-outline-regenerate") /*id: 521705*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  function f(e, t, n) {
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
  let m = e => {
    let {
      message: t
    } = e;
    let {
      sendMessage: n
    } = chatServiceContext.useChatService("chatMessageService");
    let {
      conversation_id: i = "",
      reply_id: v = ""
    } = t;
    return reactJsxRuntimeCoreReexport.jsx(iconButtonWithTooltip.IconButton, {
      "data-testid": "message_action_regenerate",
      prefix: reactJsxRuntimeCoreReexport.jsx(syncIconComponent.SyncIcon, {}),
      onClick: () => {
        let e = chatMessageStoreFactory.createMessageStore.getState();
        let o = conversationMessageUtils_1.getMessageById(e, i, v);
        let a = {
          scene: skillConstantsEnum.SceneType.REGENERATE
        };
        if (o == null ? undefined : o.message_id) {
          chatMessageStoreUpdater.updateChatMessages({
            conversationId: i,
            immerUpdate: e => {
              messageRegenAndReplyUtils.regenMessageActions(e).setRegenMessageInactive(t.message_id || "");
            }
          });
          return n([{
            conversationId: i,
            operation: {
              regenerate: {
                sentMessageId: o.message_id,
                sentLocalMessageId: (o == null ? undefined : o.local_message_id) ?? "",
                regenerateTailMessageId: t.message_id || ""
              }
            },
            reportParams: a
          }]);
        }
      }
    });
  };
  class g {
    constructor() {
      f(this, "pluginIdentifier", chatOutlineRegenerate.outlineRegenerate);
      f(this, "ButtonContentGroups", [m, asyncSkillReceiveMessageAction_1.SwitchActionButton]);
      f(this, "DropdownItemContentGroups", [m, asyncSkillReceiveMessageAction_1.PrevActionDropdownItem, asyncSkillReceiveMessageAction_1.NextActionDropdownItem]);
    }
  }
  require.r(exports);
  require.d(exports, {
    OutlineRegenerateReceiveMessageActionButtonPlugin: function () {
      return g;
    }
  });
}
// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'i' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'r' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'o' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 's' to 'conversationMessageUtils'
// - Resolved require(45244) to 'conversation-message-utils'
// - Renamed variable 'l' to 'chatTextBlockFactory'
// - Resolved require(351389) to 'chat-text-block-factory'
// - Renamed variable 'a' to 'chatConversationBotId'
// - Resolved require(619792) to 'chat-conversation-bot-id'
// - Renamed variable 'c' to 'chatSkillPinTypeDeterminer'
// - Resolved require(926482) to 'chat-skill-pin-type-determiner'
// - Renamed variable 'u' to 'useLatestCallbackHook_1'
// - Resolved require(318475) to 'use-latest-callback-hook_1'
// - Renamed variable 'd' to 'chatPerformanceMark'
// - Resolved require(706746) to 'chat-performance-mark'
// - Renamed variable 'p' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Updated imported property 'hx' to 'useAttachmentHook' (module 793484)
// - Updated imported property 'Z' to 'useLatestCallback' (module 318475)
// - Updated imported property 'S' to 'getConversationBotId' (module 619792)
// - Updated imported property 'nD' to 'getBotLocalConversation' (module 926482)
// - Updated imported property 'f' to 'createTextBlock' (module 351389)
// - Updated imported property 'Gq' to 'assembleContentBlocks' (module 45244)
// - Updated imported property 'cW' to 'createMessageObject' (module 45244)
// - Updated imported property 'i1' to 'parseConversationId' (module 45244)
// - Updated imported property 'yn' to 'serializeAbilityData' (module 45244)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'e' to 'trackPerformance' (module 706746)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: chat-runtime-chunk-after-interactive.a19b580b.js
         * chunkId: 36136
         * moduleId: 399317
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var conversationMessageUtils = require("conversation-message-utils") /*id: 45244*/;
  var chatTextBlockFactory = require("chat-text-block-factory") /*id: 351389*/;
  var chatConversationBotId = require("chat-conversation-bot-id") /*id: 619792*/;
  var chatSkillPinTypeDeterminer = require("chat-skill-pin-type-determiner") /*id: 926482*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var chatPerformanceMark = require("chat-performance-mark") /*id: 706746*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let _ = e => {
    let {
      chatId: t,
      activeSkillType: n,
      reportParams: i
    } = e;
    let {
      clearAllAttachments: d
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: t,
      skillType: n
    });
    return {
      handleClickSug: useLatestCallbackHook_1.useLatestCallback(async (e, o) => {
        let u = chatConversationBotId.getConversationBotId(t);
        let p = t;
        if (!u && chatSkillPinTypeDeterminer.getBotLocalConversation(t)) {
          u = t;
          p = undefined;
        }
        let _ = {
          ...i,
          ...o,
          scene: "onboarding_suggestions",
          upload_collection_way: undefined,
          upload_file_type: undefined,
          is_long_file: 0,
          new_guidance: "1",
          is_from_screen_shot: 0
        };
        d({});
        let v = chatTextBlockFactory.createTextBlock(e);
        let h = conversationMessageUtils.assembleContentBlocks({
          textBlock: v
        });
        let m = conversationMessageUtils.createMessageObject({
          conversation: conversationMessageUtils.parseConversationId(p ?? ""),
          message: {
            content_blocks_v2: h,
            ext: {
              chat_ability: conversationMessageUtils.serializeAbilityData(n, JSON.stringify({}))
            }
          }
        });
        let f = await chatIocServiceLoaderHook.loadServiceAsync("chatIMService");
        if (f != null) {
          f.sendMessage({
            message: m,
            session: {
              reportParams: _
            }
          });
        }
      })
    };
  };
  let v = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      handleClickSug: n
    } = _(e);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      handleClickSug: n
    }));
    return reactJsxRuntimeCoreReexport.jsx(chatPerformanceMark.trackPerformance, {
      type: "TTU"
    });
  });
  require.r(exports);
  require.d(exports, {
    UseSubmitRefHolder: function () {
      return v;
    }
  });
}
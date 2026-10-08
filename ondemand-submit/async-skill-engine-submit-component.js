// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'r' to 'reactCoreLibraryReexport'
// - Resolved require(634663) to 'react-core-library-reexport'
// - Renamed variable 'i' to 'chatStatusActionTypes'
// - Resolved require(757046) to 'chat-status-action-types'
// - Renamed variable 'a' to 'chatIocServiceLoaderHook'
// - Resolved require(31335) to 'chat-ioc-service-loader-hook'
// - Renamed variable 'o' to 'chatStoreManager'
// - Resolved require(537944) to 'chat-store-manager'
// - Renamed variable 'l' to 'asyncSkillChatInput_1_1'
// - Resolved require(222126) to 'async-skill-chat-input_1_1'
// - Renamed variable 'u' to 'chatMessageBuilders'
// - Resolved require(502721) to 'chat-message-builders'
// - Renamed variable 'c' to 'attachmentUploadStoreHooks'
// - Resolved require(793484) to 'attachment-upload-store-hooks'
// - Renamed variable 's' to 'chatInputStoreHelpers'
// - Resolved require(411117) to 'chat-input-store-helpers'
// - Renamed variable 'd' to 'chatGuidanceSelectors'
// - Resolved require(441131) to 'chat-guidance-selectors'
// - Renamed variable 'f' to 'userInfoStatusSelectors'
// - Resolved require(480327) to 'user-info-status-selectors'
// - Renamed variable 'm' to 'useLatestCallbackHook_1'
// - Resolved require(318475) to 'use-latest-callback-hook_1'
// - Renamed variable 'p' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 'h' to 'i18nVisibleTranslator'
// - Resolved require(77869) to 'i18n-visible-translator'
// - Renamed variable 'v' to 'reactJsxRuntimeCoreReexport'
// - Resolved require(917067) to 'react-jsx-runtime-core-reexport'
// - Resolved require.e(31165) to 'async-dbx-toast'
// - Resolved require.bind(682910) to 'dbx-sonner-toaster-wrapper'
// - Updated imported property 'Es' to 'hasActiveSkill' (module 441131)
// - Updated imported property 'nu' to 'selectUserInfoSuccess_1' (module 480327)
// - Updated imported property 'Z' to 'useLatestCallback' (module 318475)
// - Updated imported property 'D' to 'loadServiceAsync' (module 31335)
// - Updated imported property 'GX' to 'getStoreState' (module 537944)
// - Updated imported property 'u' to 'chatActionTypes' (module 757046)
// - Updated imported property 'M' to 'chatStatusTypes' (module 757046)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'hx' to 'useAttachmentHook' (module 793484)
// - Updated imported property 'vO' to 'clearTextValue' (module 411117)
// - Updated imported property 'eg' to 'getPreGeneratedId' (module 502721)
// - Updated imported property 'u' to 'asyncSkillManager' (module 222126)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ondemand-submit.8bbc7e38.js
         * chunkId: 7410
         * moduleId: 759834
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var chatStatusActionTypes = require("chat-status-action-types") /*id: 757046*/;
  var chatIocServiceLoaderHook = require("chat-ioc-service-loader-hook") /*id: 31335*/;
  var chatStoreManager = require("chat-store-manager") /*id: 537944*/;
  var asyncSkillChatInput_1_1 = require("async-skill-chat-input_1_1") /*id: 222126*/;
  var chatMessageBuilders = require("chat-message-builders") /*id: 502721*/;
  var attachmentUploadStoreHooks = require("attachment-upload-store-hooks") /*id: 793484*/;
  var chatInputStoreHelpers = require("chat-input-store-helpers") /*id: 411117*/;
  var chatGuidanceSelectors = require("chat-guidance-selectors") /*id: 441131*/;
  var userInfoStatusSelectors = require("user-info-status-selectors") /*id: 480327*/;
  var useLatestCallbackHook_1 = require("use-latest-callback-hook_1") /*id: 318475*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var i18nVisibleTranslator = require("i18n-visible-translator") /*id: 77869*/;
  var reactJsxRuntimeCoreReexport = require("react-jsx-runtime-core-reexport") /*id: 917067*/;
  let y = e => {
    let {
      chatId: t,
      skill: n,
      reportParams: r
    } = e;
    let l = chatGuidanceSelectors.hasActiveSkill();
    let u = n == null ? undefined : n.skill_type;
    let c = userInfoStatusSelectors.selectUserInfoSuccess_1();
    return useLatestCallbackHook_1.useLatestCallback(async e => {
      let {
        exitSkill: n = false
      } = e || {};
      await chatIocServiceLoaderHook.loadServiceAsync("chatInputStoreService").then(e => {
        if (u && !l && c) {
          if (e != null) {
            e.pinSkill(u);
          }
        }
        if (n) {
          chatStoreManager.getStoreState("chatInputStore").closeSkillPanel(t);
        } else if (u) {
          chatStoreManager.getStoreState("chatInputStore").updateActiveSkillTypeMap(t, u, chatStatusActionTypes.chatActionTypes.AfterSkill);
        }
        loggerServiceCore.defaultLogger.persist.info({
          eventName: "skill_input_send_keep_input",
          meta: {
            ...r,
            keep_input: n ? "0" : "1"
          }
        });
        if (e != null) {
          e.updateSelectedRecommendSkill();
        }
        if (e != null) {
          e.updateSendMessageStatus(t, chatStatusActionTypes.chatStatusTypes.Sending);
        }
      });
    });
  };
  let _ = e => {
    let {
      config: t,
      chatId: r,
      skill: i,
      reportParams: a,
      scene: d
    } = e;
    let {
      getPreGeneratedLocalMessageId: f,
      updatePreGeneratedLocalMessageId: v,
      clearAllAttachments: _
    } = attachmentUploadStoreHooks.useAttachmentHook({
      chatId: r,
      skillType: i == null ? undefined : i.skill_type
    });
    let g = async () => {
      chatInputStoreHelpers.clearTextValue();
      await v();
      await _({});
    };
    let w = y({
      config: t,
      chatId: r,
      skill: i,
      reportParams: a,
      scene: d
    });
    return useLatestCallbackHook_1.useLatestCallback(async (e, c) => {
      let s = "";
      try {
        var d;
        let e = await ((d = t.submitPipeline) === null || d === undefined ? undefined : d.call(t));
        if (!e) {
          return;
        }
        s = (await (f == null ? undefined : f())) ?? "";
        chatMessageBuilders.getPreGeneratedId(s);
        await asyncSkillChatInput_1_1.asyncSkillManager.run(e, {
          content: {
            chatId: r,
            abilityType: (i == null ? undefined : i.skill_type) ? i.skill_type : undefined,
            localMessageId: s,
            presetPrompt: c,
            extra: {},
            ...((t == null ? undefined : t.modeSelectsItems) ? {
              modeSelectValue: chatStoreManager.getStoreState("chatInputStore").modeSelectValue
            } : {}),
            reportParams: {
              ...a
            }
          }
        });
        g();
        w({
          exitSkill: false
        });
      } catch (t) {
        loggerServiceCore.defaultLogger.persist.error({
          eventName: "submit_pipeline_error",
          error: t instanceof Error ? t : Error(String(t)),
          meta: {
            scene: "generic_conversation_input_submit",
            chatId: r,
            localMessageId: s
          }
        });
        let {
          dbxToastAPI: e
        } = await require.e("async-dbx-toast") /*id: 31165*/.then(require.bind(require, "dbx-sonner-toaster-wrapper") /*id: 682910*/);
        e.warning(i18nVisibleTranslator.visibleT("system_error_toast"));
      }
    });
  };
  let g = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let n = _(e);
    reactCoreLibraryReexport.useImperativeHandle(t, () => ({
      submit: n
    }), [n]);
    return reactJsxRuntimeCoreReexport.jsx(reactJsxRuntimeCoreReexport.Fragment, {});
  });
  require.d(exports, {
    EngineSubmit: function () {
      return g;
    }
  });
}
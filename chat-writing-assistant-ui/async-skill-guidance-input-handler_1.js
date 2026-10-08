// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'q' to 'createAsyncSkillGuidanceInputHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-skill-guidance-input.de910ce6.js
         * chunkId: 38971
         * moduleId: 368246
         */
module.exports = function (module, exports, require) {
  var throttledDeepCloneUtil_1 = require("throttled-deep-clone-util_1") /*id: 891816*/;
  var asyncWriteSkillMessageSender = require("async-write-skill-message-sender") /*id: 511261*/;
  var chatServiceContext = require("chat-service-context") /*id: 18590*/;
  var chatViewCoreSelectors = require("chat-view-core-selectors") /*id: 837195*/;
  let o = e => {
    let {
      skill: t,
      reportParams: n,
      exitSkillAfterSendMessage: o = false,
      allowSendMessage: s = true,
      onAfterSendMessage: u,
      onBeforeSendMessage: d
    } = e;
    let {
      sendMessage: c
    } = chatServiceContext.useChatService("chatMessageService");
    let {
      sendWritePayloadMessage: p
    } = asyncWriteSkillMessageSender.useWritePayload();
    let f = chatViewCoreSelectors.useChatId();
    return async e => {
      var r;
      let {
        text: l,
        skillObj: a,
        payload: m,
        extraExt: v,
        reportParams: h
      } = e;
      if (!s) {
        return;
      }
      let _ = throttledDeepCloneUtil_1.throttledDeepClone(a, {
        skill_id: t == null ? undefined : (r = t.skill_type) === null || r === undefined ? undefined : r.toString(),
        skill_type: t == null ? undefined : t.skill_type,
        variables: {
          action: "artifact"
        }
      });
      let g = [{
        ...(m ?? {}),
        text: l,
        reportParams: {
          scene: "chat_action_bar",
          ...(h ?? {}),
          ...n
        },
        extraExt: {
          ...v,
          input_skill: JSON.stringify(_),
          answer_with_suggest: "0"
        }
      }];
      if ((await (d == null ? undefined : d({
        checkNewGuidanceAb: false,
        sendMessageOptions: g
      }))) !== false) {
        await p({
          payload: g[0],
          rawSendMessage: c,
          conversationId: f,
          inputSkillObj: _,
          reportParams: g[0].reportParams
        });
        if (u != null) {
          u({
            exitSkill: o
          });
        }
      }
    };
  };
  require.d(exports, {
    createAsyncSkillGuidanceInputHandler: function () {
      return o;
    }
  });
}
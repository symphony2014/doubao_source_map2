// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed variable 'a' to 'aiActionConstants'
// - Resolved require(535829) to 'ai-action-constants'
// - Renamed variable 'n' to 'aiAssistantSkillTypes'
// - Resolved require(687482) to 'ai-assistant-skill-types'
// - Renamed variable 'o' to 'apiServicesCollection'
// - Resolved require(147875) to 'api-services-collection'
// - Renamed variable 'r' to 'loggerServiceCore'
// - Resolved require(474960) to 'logger-service-core'
// - Renamed variable 's' to 'skillConstantsEnum'
// - Resolved require(791429) to 'skill-constants-enum'
// - Updated imported property 'W' to 'SkillTypes' (module 687482)
// - Updated imported property 'Ux' to 'UploadSource' (module 791429)
// - Updated imported property 'k' to 'defaultLogger' (module 474960)
// - Updated imported property 'G' to 'aiActionConstants' (module 535829)
// - Updated imported property 'mH' to 'SamanthaApiService' (module 147875)
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ai-space-coding-url-parse-plugin.73fc42d3.js
         * chunkId: 4258
         * moduleId: 891143
         */
module.exports = function (module, exports, require) {
  var aiActionConstants = require("ai-action-constants") /*id: 535829*/;
  var aiAssistantSkillTypes = require("ai-assistant-skill-types") /*id: 687482*/;
  var apiServicesCollection = require("api-services-collection") /*id: 147875*/;
  var loggerServiceCore = require("logger-service-core") /*id: 474960*/;
  var skillConstantsEnum = require("skill-constants-enum") /*id: 791429*/;
  let d = e => {
    let {
      payload: i,
      isSpaceNext: t
    } = e;
    let {
      files: a,
      prompt: o,
      shareId: r
    } = i;
    let {
      codeType: d,
      uri: l,
      nodeId: _,
      name: c,
      size: p,
      conversationId: u,
      codingSkillEnable: f
    } = a[0];
    let v = {
      skill_id: aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant.toString(),
      skill_type: aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant
    };
    let y = f ? {
      input_skill: JSON.stringify(v)
    } : {};
    let g = t ? {
      type: "mix_ai_space",
      value: JSON.stringify({
        obj_token: _,
        obj_type: d === "coding_dir" ? 124 : 12,
        use_time: String(Math.floor(Date.now() / 1000))
      })
    } : {
      type: "ai_space",
      value: JSON.stringify({
        node_id: _,
        share_id: r
      })
    };
    y.samantha_onboarding = JSON.stringify(g);
    return [{
      text: o,
      conversationId: u,
      sendAttachments: [{
        type: d === "coding_dir" ? "directory" : "file",
        key: l,
        name: c,
        size: p || 0,
        identifier: l,
        localKey: l
      }],
      reportParams: {
        scene: "ai_space",
        upload_from: skillConstantsEnum.UploadSource.UPLOAD_FROM_DRIVE,
        entrance_from: "ai_space_ask_doubao"
      },
      extraExt: y
    }];
  };
  async function l(e) {
    let {
      payload: i,
      navigate: t,
      phase3EndTime: s,
      sendMessage: l,
      sendMessageV2: _,
      openCodingCanvasByKey: c,
      prehandlerData: p = {},
      preSendConversationId: u
    } = e;
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase4_duration",
      meta: {
        duration: Date.now() - s,
        plugin: aiActionConstants.aiActionConstants.AISpace_Coding_File
      }
    });
    let f = Date.now();
    let {
      files: v,
      shareId: y,
      needBindConversation: g,
      isSpaceNext: h
    } = i;
    let S = u || p.conversationId;
    let {
      codeType: m,
      uri: k,
      nodeId: A,
      name: O,
      isOtherShare: D,
      codingSkillEnable: N
    } = v[0];
    if (S) {
      t(`/chat/${S}`, {
        replace: true
      });
    }
    let b = {
      skill_id: aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant.toString(),
      skill_type: aiAssistantSkillTypes.SkillTypes.SkillCodeAssistant
    };
    let C = N ? {
      input_skill: JSON.stringify(b)
    } : {};
    let I = {
      type: "ai_space",
      value: JSON.stringify({
        node_id: A,
        share_id: y
      })
    };
    C.samantha_onboarding = JSON.stringify(I);
    if (m === "coding_file") {
      if (N) {
        c(k, {
          attachments: [{
            key: k,
            name: O,
            type: "file"
          }]
        });
      }
    } else if (m === "coding_dir") {
      if (N) {
        c(A, {
          attachments: [{
            key: k,
            name: O,
            type: "directory"
          }]
        });
      }
    } else if (m === "coding_artifact" && D && !S) {
      var J;
      var E;
      let e = await apiServicesCollection.SamanthaApiService.ThreadCreate({
        bot_id: "7338286299411103781",
        samantha_onboarding: {
          type: "ai_space",
          value: JSON.stringify({
            node_id: A,
            share_id: y
          })
        }
      });
      if (e == null ? undefined : (J = e.data) === null || J === undefined ? undefined : J.thread_info?.thread_id) {
        t(`/chat/${(E = e.data.thread_info) === null || E === undefined ? undefined : E.conversation?.conversation_id}`, {
          replace: true
        });
      }
    }
    if (!S && m !== "coding_artifact") {
      let e = await d({
        payload: i,
        needBindConversation: g,
        isSpaceNext: h
      });
      if (e) {
        l(e, undefined, false);
      }
    }
    loggerServiceCore.defaultLogger.persist.info({
      eventName: "aispace_jump_phase5_duration",
      meta: {
        duration: Date.now() - f,
        plugin: aiActionConstants.aiActionConstants.AISpace_ExcelAIRead
      }
    });
  }
  require.r(exports);
  require.d(exports, {
    default: function () {
      return l;
    }
  });
}